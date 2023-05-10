var express = require('express');
var router = express.Router();
var app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: true
}));


router.get('/page1', function(req, res,next)  {
  const branchname = '';
  const branchmandal = '';
  const user = req.cookies.user;
 // Check if the user is logged in
  if (user && user.loggedIn) {
    res.render('page1', {branchname: branchname,branchmandal: branchmandal});
  } else {
    res.redirect('/');
  }
});
  

router.post('/page1',function(req, res,next)  {
  req.session.branchname = req.body.branchname;
  req.session.branchmandal = req.body.branchmandal;
  res.redirect('/ab/abform2');
});

router.get('/abform2', (req, res) => {
  const branchname = req.session.branchname;
  const branchmandal = req.session.branchmandal;
  const branchdt='';
   res.render('abform2', {branchname: branchname,branchmandal: branchmandal,branchdt: branchdt});
});



module.exports = router;