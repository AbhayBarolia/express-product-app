const express= require("express");

const router= express.Router();

router.get('/first',(req,res,next)=>{
    console.log("/ middeleware ");
    res.send("<h1>Hello express js </h1>");
    }); 


module.exports= router;