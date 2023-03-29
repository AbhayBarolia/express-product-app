const express= require("express");
const path = require("path");
const router= express.Router();
const rootDir=require('../util/paths');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
    }); 

router.post('/',(req,res,next)=>{
    res.redirect('/success');
    });     



module.exports= router;