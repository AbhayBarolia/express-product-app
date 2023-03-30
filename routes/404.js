const express= require("express");
const getError= require('../controllers/404Controller');
const router= express.Router();


router.use('/',getError.get404Error)

module.exports = router;