const path = require("path");

const rootDir=require('../util/paths');

const products=[];

exports.getAddProduct=(req,res,nexr)=>{
    console.log("add-product");
    res.sendFile(path.join(rootDir,'views','product.html'));
}

exports.postAddProduct=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    }

exports.getProduct=(req,res,next)=>{
    console.log("/ middeleware ");
    res.sendFile(path.join(rootDir,'views','shop.html'));
    }
