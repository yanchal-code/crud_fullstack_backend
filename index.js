const express=require('express')
const dbConnect=require('./view/dbConnect')
const userRoute=require('./route/userRoute')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
dbConnect()
app.use(userRoute)
const PORT=2400
app.listen(PORT,()=>{
     console.log(`server is running on the port ${PORT}`);
     
})