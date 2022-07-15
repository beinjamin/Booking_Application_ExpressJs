import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"

const app=express()
dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect mongodb")
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected",()=>{
    console.log ("mongoDB deconnexion")
})
//Middlewares
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);
mongoose.connection.on("connected",()=>{
    console.log ("mongoDB connecte")
})

app.listen(8800, ()=>{
connect()
console.log ("connexion backend")
})
