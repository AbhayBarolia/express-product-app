const express= require('express');
const bodyParser= require('body-parser');
const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const errorRoutes= require('./routes/error');


const app = express();

app.use(bodyParser.urlencoded());

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use(errorRoutes);

app.listen(5000);
