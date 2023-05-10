var express = require('express');
var path = require('path');
var logger = require('morgan')
var ab = require('./routes/ab');
var app = express();
var bodyParser    = require('body-parser');
const cookieParser = require('cookie-parser');
var router = express.Router();
const port = 8080;
var session = require('express-session');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//routes
app.use('/ab', ab);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
 app.use(session({
  secret: 'abcd',
  resave: false,
  saveUninitialized: true
}));


//login page
app.get('/', (req, res) => {
  const username = '';
  const password = '';
    res.render('login.ejs', {username: username,password: password});
});

app.post('/', (req, res) => {
  const { username, password } = req.body;
  console.log('username:', username, 'password:', password);
  // Check if the username and password are correct
  if (username === 'myusername' && password === 'mypassword') {
    // Set a user cookie for session storage
    res.cookie('user', { username, loggedIn: true }, { maxAge: 80 * 80 * 1000 });
    console.log(req.cookies.user);
    res.redirect('/home');
  } else {
    console.log('login failed'); 
   res.render('login.ejs', { error: 'Invalid email or password', username: username,password: password });
  }
});

//index page
// app.get('/home', (req, res) => {
//   console.log('home page rendered');
//   res.render('home');
// });


// GET route for displaying the user's profile page
 app.get('/home', (req, res) => {
   const user = req.cookies.user;
 // Check if the user is logged in
  if (user && user.loggedIn) {
    res.render('home');
  } else {
    res.redirect('/');
  }
});

// GET route for logging out the user
app.get('/logout', (req, res) => {
  // Clear the user's login information from the cookie
  res.clearCookie('user');
  res.send('You have been logged out.');
});


module.exports = app;

app.listen(port,console.log("listening to port 8080"));
