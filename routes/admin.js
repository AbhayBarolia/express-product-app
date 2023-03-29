const express= require("express");
const path = require("path");
const router= express.Router();
const rootDir=require('../util/paths');

router.get('/add-product',(req,res,next)=>{
    console.log("add-product");
    res.sendFile(path.join(rootDir,'views','product.html'));
    }); 

router.post('/add-product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
        });     

module.exports = router;
