const express= require("express");
const router= express.Router();
const addProduct= require('../controllers/productsController');

router.get('/add-product',addProduct.getAddProduct) 

router.post('/add-product',addProduct.postAddProduct);     

module.exports = router;
