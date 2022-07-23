import express from "express";
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Hello ,this ")
})

router.get("/register", (req,res)=>{
    res.send("Hello ,this ")
})


export default router