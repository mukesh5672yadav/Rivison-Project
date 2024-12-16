import { useState } from "react"

const Page = () => {

    const [na, setna] = useState();
    const [ma, setma] = useState();
    const [de, setde] = useState();
    const [co, setco] = useState();
    const [sc, setsc] = useState();
    const [msg, setmsg] = useState();

    const fun1 = (e) => {
        setna(e.target.value)
    }
    const fun2 = (e) => {
        setma(e.target.value)
    }
    const fun3 = (e) => {
        setde(e.target.value)
    }
    const fun4 = (e) => {
        setco(e.target.value)
    }
    const fun5 = (e) => {
        setsc(e.target.files[0])
    }
    const fun6 = (e) => {
        setmsg(e.target.value)
    }

    const save = async () => {
        if (na === "") {
            alert("Enter Nmae")
        }
        else if (ma === "") {
            alert("Enter Mail")
        }
        else if (de === "") {
            alert("Enter Department")
        }
        else if (co === "") {
            alert("Enter ComputerId")
        }
        else if (sc === "") {
            alert("Upload Screenshot")
        }

        else if (msg === "") {
            alert("Type Your Query...")
        }
        else {
            var fdata = new FormData();
            fdata.append("name", na);
            fdata.append("email", ma);
            fdata.append("depart", de);
            fdata.append("id", co);
            fdata.append("pro_pic", sc);
            fdata.append("msg", msg);

            const re = await fetch("https://rivison-project-backend.onrender.com/page", {
                method: "POST",
                body: fdata
            });
            const data = await re.json();
            alert(data.msg);
        }
    }

   


    return (
        <>
                <h1 className='mt-5' style={{ paddingLeft: 200 }}>IT Service Ticket</h1>
                <span className='' style={{ paddingLeft: 200 }}>Please provide the details of the problems</span>
                <div className='container-fluid mt-3 ms-2 ' style={{ marginLeft: 0, alignItems: "center" }}>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h3>Name</h3>
                            <input type='text' onChange={fun1} style={{ borderRadius: 5, width: 250, height: 35 }} placeholder='Enter FullName'></input>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <div className='col-md-3'>
                            <h3>E-mail</h3>
                            <input type='email' onChange={fun2} style={{ borderRadius: 5, width: 250, height: 35 }} placeholder='ex: myname@example.com'></input>
                        </div>


                    </div><br /><br />
                    <div className="row">


                        <div className='col-md-3'>
                            <h3>Department</h3>
                            <input type='text' onChange={fun3} style={{ borderRadius: 5, width: 250, height: 35 }}></input>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <div className='col-md-3'>
                            <h3>Customer ID</h3>
                            <input type='text' onChange={fun4} style={{ borderRadius: 5, width: 250, height: 35 }} ></input>
                        </div>
                    </div><br /><br />

                    <div className="col-md-6">
                        <h3>Upload pdf/Images</h3>
                        <input type="file" onChange={fun5} style={{ width: 650, height: 50 }}></input>
                    </div><br /><br />

                    <div className="col-md-10">
                        <h3>Describe the Problem</h3>
                        <textarea onChange={fun6} placeholder="Type here....." style={{ width: 650, height: 50 }} />
                    </div><br />
                    <button className="btn btn-info" onClick={save} style={{ width: 100 }}>Submit</button>
                </div>
            
        </>
    )
}

export default Page