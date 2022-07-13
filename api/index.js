import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
const app=express()
dotenv.config()

const connect = async
try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    handleError(error);
  }





app.listen(8800, ()=>{
console.log ("connexion backend")
})
