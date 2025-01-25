const userModel=require("../models/userModel")
const getData=async(req,res)=>{
const result=await userModel.find()
res.send(result)
}
const saveData=async(req,res)=>{
     const {name,mobile_no,address,pin_code}=req.body
     const data=new userModel({name,mobile_no,address,pin_code})
     const result=await data.save()
     res.send(result)
}
const putData=async(req,res)=>{
     const _id=req.params._id
     const {name,mobile_no,address,pin_code}=req.body
     const result=await userModel.updateOne({_id},{name,address,mobile_no,pin_code})
     res.send(result)
}
const deleteData=async(req,res)=>{
     const _id=req.params._id
     const result=await userModel.deleteOne({_id})
     res.send(result)
}
module.exports={getData,saveData,putData,deleteData}