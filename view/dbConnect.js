const mongoose=require('mongoose')
const dbConnect=async()=>{
     // const con=await mongoose.connect("mongodb://localhost:27017/location")
     const con=await mongoose.connect("mongodb+srv://anchalcode:wCfTH7rExYl81SBR@cluster0.nj77u.mongodb.net/first_crud?retryWrites=true&w=majority&appName=Cluster0")
     if(con)
     {
          console.log("database is connected.................");
          
     }
}
module.exports=dbConnect