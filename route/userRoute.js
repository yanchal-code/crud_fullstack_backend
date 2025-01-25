const express=require('express')
const {getData,saveData,putData,deleteData}=require('../controllers/userControllers')
const userRoute=express.Router()
userRoute.get("/",function(){
     document.write("Welcome to Node.js!");
})
userRoute.get("/getData",getData)
userRoute.post("/postData",saveData)
userRoute.put("/PutData/:_id",putData)
userRoute.delete("/delete/:_id",deleteData)
module.exports=userRoute