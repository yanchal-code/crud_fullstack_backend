const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
     name:String,
     address:String,
     pin_code:String,
     mobile_no:String
})
const userModel=mongoose.model("user",userSchema)
module.exports=userModel