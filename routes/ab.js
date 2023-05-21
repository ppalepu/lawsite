var express = require('express');
var router = express.Router();
var path = require('path');
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


router.get('/perdetails', function(req, res,next)  {
  const branchname = '';
  const branchmandal = '';
  const branchdistrict = '';
  const clientname = '';
  const clientfather = '';
  const clientvillage = '';
  const clientmandal = '';
  const clientdistrict = '';
  const regdocdate = '';
  const sroname = '';
  const docno = '';
  const propsurno = '';
  const propdoorno = '';
  const propolddoorno = '';
  const proparea = '';
  const propdistrict = '';
  const propmandal= '';
  const propvillage = '';
  const proptype = '';
  const propage = '';
  const propsinceyr = '';
  const encdate = '';
  const bvsno = '';
  const executants = '';
  const user = req.cookies.user;
 // Check if the user is logged in
  if (user && user.loggedIn) {
    res.render('perdetails', {branchname: branchname,branchmandal: branchmandal,branchdistrict: branchdistrict,clientname: clientname,clientfather: clientfather,clientvillage: clientvillage,clientmandal: clientmandal,clientdistrict: clientdistrict,regdocdate: regdocdate,sroname: sroname,docno: docno,propsurno: propsurno,propdoorno: propdoorno,propolddoorno: propolddoorno,proparea: proparea,propdistrict: propdistrict,propmandal: propmandal,propvillage: propvillage,proptype: proptype,propage: propage,propsinceyr: propsinceyr,encdate: encdate,bvsno: bvsno,executants: executants});
  } else {
    res.redirect('/');
  }
});
  

router.post('/perdetails',function(req, res,next)  {
  req.session.branchname = req.body.branchname;
  req.session.branchmandal = req.body.branchmandal;
  req.session.branchdistrict = req.body.branchdistrict;
  req.session.clientname = req.body.clientname;
  req.session.clientfather = req.body.clientfather;
  req.session.clientvillage = req.body.clientvillage;
  req.session.clientmandal = req.body.clientmandal;
  req.session.clientdistrict = req.body.clientdistrict;
  req.session.regdocdate = req.body.regdocdate;
  req.session.sroname = req.body.sroname;
  req.session.docno = req.body.docno;
  req.session.propsurno = req.body.propsurno;
  req.session.propdoorno = req.body.propdoorno;
  req.session.propolddoorno = req.body.propolddoorno;
  req.session.proparea = req.body.proparea;
  req.session.propdistrict = req.body.propdistrict;
  req.session.propmandal = req.body.propmandal;
  req.session.propvillage = req.body.propvillage;
  req.session.proptype = req.body.proptype;
  req.session.propage = req.body.propage;
  req.session.propsinceyr = req.body.propsinceyr;
  req.session.encdate = req.body.encdate;
  req.session.bvsno = req.body.bvsno;
  req.session.executants = req.body.executants;

  res.redirect('/ab/scheduleprop');
});

router.get('/scheduleprop', (req, res) => {
  const user = req.cookies.user;
 // Check if the user is logged in
  if (user && user.loggedIn) {
    res.render('scheduleprop');
    } else {
    res.redirect('/');
    }
});

router.post('/scheduleprop',function(req, res,next)  {
  res.redirect('/ab/scrunlst');
});




module.exports = router;