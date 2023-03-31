const express= require("express");
const productController= require('../controllers/productsController');
const router= express.Router();
const adminData = require('./admin');


router.get('/',productController.getProduct); 


module.exports= router;