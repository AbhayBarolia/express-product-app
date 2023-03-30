const express= require("express");
const contact= require('../controllers/contactusController');
const router= express.Router();


router.get('/', contact.getContactPage); 

router.post('/',contact.PostContactDetails);     



module.exports= router;