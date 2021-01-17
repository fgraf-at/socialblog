const environment = require('./environments/environment');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//route imports
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');


const app = express();


//mongoose setup
mongoose
  //connect tries to setup a database connection to mongoDB.
  .connect(environment.mongoDB) //environment.mongoDB is a config variable which stores the connection string
  //connection could be established
  .then(() => {
    console.log('Connected to database!');
  })
  //connection could not be established
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static(path.join('backend/images')));


//this code is required if backend and fronted is separated.

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'GET, POST, PATCH, PUT, DELETE, OPTIONS'
//     );
//     next();
// });


//Route setup for posts
app.use('/api/posts', postsRoutes);
//Route setup for user
app.use('/api/user', userRoutes);
//Route setup for friends
app.use('/api/friend', friendRoutes);
//make dist directory static (accessible from browser)
app.use('/', express.static(path.join(__dirname, 'dist')));
//This middleware loads index html. This functionality is mainly required in production.
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
module.exports = app;
