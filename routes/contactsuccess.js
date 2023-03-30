const express= require("express");
const successController = require("../controllers/contactusController");
const router= express.Router();


router.get('/', successController.successPage); 

router.post('/',successController.successRedirect);     



module.exports= router;