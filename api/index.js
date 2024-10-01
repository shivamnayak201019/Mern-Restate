import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'



dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.log(error)
})





const app=express()

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000 :https://localhost:3000')
})