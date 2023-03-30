const path = require("path");
const rootDir=require('../util/paths');


exports.getContactPage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
    }


exports.PostContactDetails=(req,res,next)=>{
    res.redirect('/success');
    }

exports.successPage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactsuccess.html'));
    } 

exports.successRedirect=(req,res,next)=>{
    res.redirect('/shop');
    }