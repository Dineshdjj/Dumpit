const express = require('express');
const { result } = require('lodash');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Blog = require('./models/blogs1');
const routes = require('./routes/blogRoutes')
const db = 'mongodb+srv://santhosh_18:santhosh1818@santhosh.q56f2et.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=> console.log('connected to db'))
    .catch((err)=> console.log(err));
const morgan = require('morgan');
app.set('view engine','ejs');
app.listen(3000);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use('/uploads', express.static('public/uploads'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));

const multer = require('multer');

 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });


app.get('/',(req,res)=>{
    res.redirect('/home');
});
app.get('/blogs1/allBlog',(req,res)=>{
    res.redirect('/allBlog');
});
app.get('/blogs1/create',(req,res)=>{
    res.redirect('/create');
});
app.get('/blogs1/home',(req,res)=>{
    res.redirect('/home');
});
app.get('/blogs1/about',(req,res)=>{
    res.redirect('/about');
});
app.get('/blogs1/contact',(req,res)=>{
    res.redirect('/contact');
});
app.get('/blogs1/drinking',(req,res)=>{
    res.redirect('/drinking');
});
app.get('/blogs1/drugs',(req,res)=>{
    res.redirect('/drugs');
});
app.get('/blogs1/gaming',(req,res)=>{
    res.redirect('/gaming');
});
app.get('/blogs1/ignite',(req,res)=>{
    res.redirect('/ignite');
});
app.get('/blogs1/mood',(req,res)=>{
    res.redirect('/mood');
});
app.get('/blogs1/smoking',(req,res)=>{
    res.redirect('/smoking');
});


app.use(routes);

