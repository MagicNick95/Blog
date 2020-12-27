require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');


//Setting up the express app:
const app = express();

//MongoDB:
const dbURI = process.env.DATABASE_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(process.env.PORT))
    .catch((err) => console.log(err));


//Setting up the view engine:
app.set('view engine', 'ejs');

//Middleware:
app.use(express.urlencoded({ extended: true }));

//Static files:
app.use(express.static('public'));




//Get requests:
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});


//Blog Routes:
app.use('/blogs', blogRoutes);


//404 page:
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});




















