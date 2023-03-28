const express= require('express');
const bodyParser= require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/add-product',(req,res,next)=>{
    console.log("add-product");
    res.send('<form action="/product" method="POST"><input type=text name= "title"><button type= submit>Add Product</button></form>');
    }); 

app.post('/product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
        });     

app.use('/',(req,res,next)=>{
    console.log("/ middeleware ");
    res.send("<h1>Hello express js </h1>");
    }); 

app.listen(5000);