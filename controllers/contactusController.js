const path = require("path");
const rootDir=require('../util/paths');


exports.getContactPage=(req,res,next)=>{
    res.render('contactus', {
        pageTitle: 'contact-us',
        path: '/contact-us',
        activeContactUS: true,
        contactusCSS: true
      });
    }


exports.PostContactDetails=(req,res,next)=>{
    res.redirect('/success');
    }

exports.successPage=(req,res,next)=>{
    res.render('contactsuccess', {
        pageTitle: 'success',
        path: '/success',
        activeContactUS: true,
        contactusCSS: true
      });
    } 

exports.successRedirect=(req,res,next)=>{
    res.redirect('/shop');
    }