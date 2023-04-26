var express = require('express');
var path = require('path');
var logger = require('morgan');
var ab = require('./routes/ab');
var app = express();
//var mongoose = require("mongoose");
//var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var router = express.Router();
const port = 8080;
var session = require('express-session');

// Calling form.js from models
var Form=require("./models/form");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//index page
app.get('/', function(req, res, next) {
  res.render('home');
});

//routes
app.use('/ab', ab);


// set path for static assets
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());


// catch 404 and forward to error handler
//app.use(function(req, res, next) {
  //var err = new Error('Not Found');
  //err.status = 404;
  //next(err);
//});

// error handler
//app.use(function(err, req, res, next) {
  // render the error page
  ///res.status(err.status || 500);
  //res.render('error', {status:err.status, message:err.message});
//});

module.exports = app;

app.listen(port,console.log("listening to port 8080"));
