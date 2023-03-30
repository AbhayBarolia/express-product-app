const express= require('express');
const bodyParser= require('body-parser');
const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const contactRoutes= require('./routes/contactus');
const contactsuccess= require('./routes/contactsuccess');
const errorRoutes= require('./routes/404');
const redirectRoutes= require('./routes/redirect');
const path= require('path');


const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use('/contact-us',contactRoutes);

app.use('/success',contactsuccess);

app.use('/',redirectRoutes);

app.use(errorRoutes);

app.listen(5000);
