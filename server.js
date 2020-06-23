//Dependencies 
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000; 
const db = require('./db');


//middlewares 
app.use(session( {
    secret: process.env.SECRET || 'mySecret',
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

db.connect();



//router 
require('./routes')(app);



app.listen(port, () => {
    console.log('I am listening to port:', port);
});

