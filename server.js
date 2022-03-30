const express = require('express');
const app = express();
const path =require('path');

//For protecting sensitive information
const dotenv = require('dotenv');
dotenv.config({path: './.env'}); 

//Connecting to mysql (make a database named Travewire)
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DATABASE,
    database: 'Travewire'
});
db.connect((error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('Connected to mysql...');
    }
});

//for keeping the files of css 
const publicDirectory = path.join(__dirname,'./public/css');
app.use(express.static(publicDirectory));


app.set('view engine', 'ejs');
//app.use(express.urlencoded({extended:false}));  //get data from forms and make it available in post method ko request ma


app.get('/', (req, res)=>{
    res.render('index')
});


app.get('/tourist_register', (req, res)=>{
    res.render('tourist_register')
});

app.get('/login', (req, res)=>{
    res.render('login.ejs')
});

app.get('/guide_register', (req, res)=>{
    res.render('guide_register.ejs')
});

app.post('/guide_register', (req, res) => {

});



const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`listening on port ${port}`)});


/*
home
about
detail id:
user profile
login
register
apply as guide
search
accomodationDetail
*/

/*
NAVBAR
home
about
sites
contact us 
*/