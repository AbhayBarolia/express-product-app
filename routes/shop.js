const express= require("express");
const productController= require('../controllers/productsController');
const router= express.Router();


router.get('/',productController.getProduct); 


module.exports= router;