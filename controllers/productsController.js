const path = require("path");
const Product= require('../models/product');
const rootDir=require('../util/paths');
const express = require('express');


exports.getAddProduct=(req,res,nexr)=>{
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
}

exports.postAddProduct=(req,res,next)=>{
    const product= new Product(req.body.title);
    product.saveProducts();
    res.redirect('/');
    }

exports.getProduct=(req,res,next)=>{
    Product.fetchAllProducts(products=>{
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
          });
    } );
    
    }
