var express = require('express');
var router = express.Router();
var app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: true
}));


router.get('/abform', function(req, res,next)  {
  const branchname = '';
  const branchmandal = '';
    res.render('abform', {branchname: branchname,branchmandal: branchmandal});
});

router.post('/abform',function(req, res,next)  {
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