const express = require('express');
const routes = express.Router();
const Blog = require('../models/blogs1');
const blogController = require('../controllers/blogController')

routes.get('/home',blogController.home);
routes.get('/drinking',blogController.drink);
routes.get('/drugs',blogController.drugs);
routes.get('/gaming',blogController.game);
routes.get('/smoking',blogController.smoke);
routes.get('/about',blogController.about);
routes.get('/ignite',blogController.ignite);
routes.get('/contact',blogController.contact);
routes.get('/mood',blogController.mood);

routes.get('/allBlog',blogController.index);
routes.post('/home',blogController.create_post);
routes.get('/create',blogController.create);
routes.get('/blogs1/:id',blogController.details);
routes.delete('/blogs1/:id',blogController._delete);


module.exports = routes;