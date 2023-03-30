const path = require("path");
const Product= require('../models/product');
const rootDir=require('../util/paths');


exports.getAddProduct=(req,res,nexr)=>{
    console.log("add-product");
    res.sendFile(path.join(rootDir,'views','product.html'));
}

exports.postAddProduct=(req,res,next)=>{
    const product= new Product(req.body.title);
    product.saveProducts();
    res.redirect('/');
    }

exports.getProduct=(req,res,next)=>{
    Product.fetchAllProducts(products=>{
        res.sendFile(path.join(rootDir,'views','shop.html'));
    } );
    
    }
