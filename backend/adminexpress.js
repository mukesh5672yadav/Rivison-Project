const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const signupmodel = require('./model/signupmodel');
const pagemodel = require('./model/pagemodel');
const con = mongoose.connect("mongodb://127.0.0.1:27017/Demoproject");
con.then(() => {
    console.log("Connection Successful");
});
con.catch(() => {
    console.log("Error in Connection")
});


app.use(express.json());
app.use(cors({ "origin": true, "credentials": true }));
app.use(cookieParser());
app.use(express.static("propics"));



app.post("/signup", async (req, res) => {
    try {
        const rec = await signupmodel({
            mobile: req.body.mob,
            password: req.body.psw
        })
        if (await rec.save()) {
            res.json({ msg: "Record Saved" })
        }
        else {
            res.json({ msg: "Record not Saved" })
        }

    }
    catch {
        res.json({ msg: "Error in Record Saved" })
    }
});

app.post("/login", async (req, res) => {
    try {
        const re = await signupmodel.findOne({ mobile: req.body.mob, password: req.body.psw })
        if (re) {
            res.cookie("mycookie", req.body.m).json({ msg: "Valid User" });

        }
        else {
            res.json({ msg: "Invalid User" });
        }
    }
    catch {
        res.json({ msg: "Error in Record Get" });
    }
})


const mystorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './propics');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, "pic_" + Date.now() + "." + ext);
    }
});


const myfilter = (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    if (ext === "jpg" || ext === "png" || ext === "jpeg" || ext === "pdf") {
        cb(null, true);
    }
    else {
        cb("Please select valid image", false);
    }
}

const upload = multer({
    storage: mystorage,
    fileFilter: myfilter
});



app.post("/page", upload.single("pro_pic"), async (req, res) => {
    try {
        const rec = await pagemodel({
            name: req.body.name,
            email: req.body.email,
            department: req.body.depart,
            computerid: req.body.id,
            screenshot: req.file.filename,
            message: req.body.msg
        });
        if (await rec.save()) {
            res.json({ msg: "Record Send" })
        }
        else {
            res.json({ msg: "Record not Saved" })
        }

    }
    catch {
        res.json({ msg: "Error in Record Saved" })
    }

});


app.delete("/page", async (req, res) => {
    try {
        const re = await pagemodel.findOneAndDelete({ _id: req.body.rid })
        res.json({ msg: "Record Delete" })
    }
    catch (e) {
        res.json({ msg: "Error in Record Delete" });
    }
});


app.get("/page", async (req, res) => {
    try {
        const re = await pagemodel.find()
        res.json(re);
    }
    catch {
        res.json({ msg: "Error In Record Get" })
    }
});

app.listen(9000, () => {
    console.log("Server Started");
});
