const mongoose=require('mongoose');
const pagemodel=mongoose.model("Customer Query",new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    department:{type:String,required:true},
    computerid:{type:String,required:true},
    screenshot:{type:String,required:true},
    message:{type:String,required:true}
}));

module.exports=pagemodel