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
  const branchname = req.session.branchname || '';
  const branchmandal = req.session.branchmandal || '';
  const branchdistrict = req.session.branchdistrict || '';
  const clientname = req.session.clientname || '';
  const clientfather = req.session.clientfather || '';
  const clientvillage = req.session.clientvillage || '';
  const clientmandal = req.session.clientmandal || '';
  const clientdistrict = req.session.clientdistrict || '';
  const regdocdate = req.session.regdocdate || '';
  const sroname = req.session.sroname || '';
  const docno = req.session.docno || '';
  const propsurno = req.session.propsurno || '';
  const propdoorno = req.session.propdoorno || '';
  const propolddoorno = req.session.propolddoorno || '';
  const proparea = req.session.proparea || '';
  const propdistrict = req.session.propdistrict || '';
  const propmandal= req.session.propmandal || '';
  const propvillage = req.session.propvillage || '';
  const proptype = req.session.proptype || '';
  const propage = req.session.propage || '';
  const propsinceyr = req.session.propsinceyr || '';
  const encdate = req.session.encdate || '';
  const bvsno = req.session.bvsno || '';
  const executants = req.session.executants || '';
  const sessionID = req.sessionID;
  const user = req.cookies.user;
  console.log('Session Variables:', req.session.sroname, req.session.docno);
  console.log(req.sessionID);
  if (user && user.loggedIn) {
     // Check if the user is logged in
    res.setHeader('Cache-Control', 'no-store');
    res.render('perdetails', {branchname: branchname,branchmandal: branchmandal,branchdistrict: branchdistrict,clientname: clientname,clientfather: clientfather,clientvillage: clientvillage,clientmandal: clientmandal,clientdistrict: clientdistrict,regdocdate: regdocdate,sroname: sroname,docno: docno,propsurno: propsurno,propdoorno: propdoorno,propolddoorno: propolddoorno,proparea: proparea,propdistrict: propdistrict,propmandal: propmandal,propvillage: propvillage,proptype: proptype,propage: propage,propsinceyr: propsinceyr,encdate: encdate,bvsno: bvsno,executants: executants});
  } else {
    res.redirect('/');
  }
});
  

router.post('/perdetails',function(req, res,next)  {
  req.session.branchname = req.body.branchname || '';
  req.session.branchmandal = req.body.branchmandal || '';
  req.session.branchdistrict = req.body.branchdistrict || '';
  req.session.clientname = req.body.clientname || '';
  req.session.clientfather = req.body.clientfather || '';
  req.session.clientvillage = req.body.clientvillage || '';
  req.session.clientmandal = req.body.clientmandal || '';
  req.session.clientdistrict = req.body.clientdistrict || '';
  req.session.regdocdate = req.body.regdocdate || '';
  req.session.sroname = req.body.sroname || '';
  console.log(req.body.docno);
  req.session.docno = req.body.docno || '';
  req.session.propsurno = req.body.propsurno || '';
  req.session.propdoorno = req.body.propdoorno || '';
  req.session.propolddoorno = req.body.propolddoorno || '';
  req.session.proparea = req.body.proparea || '';
  req.session.propdistrict = req.body.propdistrict || '';
  req.session.propmandal = req.body.propmandal || '';
  req.session.propvillage = req.body.propvillage || '';
  req.session.proptype = req.body.proptype || '';
  req.session.propage = req.body.propage || '';
  req.session.propsinceyr = req.body.propsinceyr || '';
  req.session.encdate = req.body.encdate || '';
  req.session.bvsno = req.body.bvsno || '';
  req.session.executants = req.body.executants || '';
  console.log('Session Variables:', req.session.sroname, req.session.docno);
  console.log(req.sessionID);
  res.redirect('/ab/scheduleprop');
});

router.get('/scheduleprop', function(req, res,next)  {
  const sessionID = req.sessionID;
  const user = req.cookies.user;
 // Check if the user is logged in
 if (user && user.loggedIn) {
    res.setHeader('Cache-Control', 'no-store');
    res.render('scheduleprop' );
  } else {
    res.redirect('/');
  }
});

router.post('/scheduleprop',function(req, res,next)  {
    console.log(req.sessionID);
  res.redirect('/ab/scrunlst');
});

router.get('/scrunlst', function(req, res,next)  {
  const sroname = req.session.sroname;
  const docno = req.session.docno;
    const sessionID = req.sessionID;
  const user = req.cookies.user;
  console.log('Session Variables:', req.session.sroname, req.session.docno);
  console.log(req.session.docno);
  console.log(req.sessionID);

 // Check if the user is logged in
 if (user && user.loggedIn) {
      res.setHeader('Cache-Control', 'no-store');
    res.render('scrunlst', {sroname: sroname,docno: docno});
  } else {
    res.redirect('/');
  }
});

router.post('/scrunlst',function(req, res,next)  {
 
  req.session.sroname = req.body.sroname || req.session.sroname || '';
  req.session.docno = req.body.docno || req.session.docno || '';
   console.log('Session Variables:', req.session.sroname, req.session.docno, );
  console.log(req.sessionID);
  res.redirect('/ab/searchrprt');
});

router.get('/searchrprt', function(req, res,next)  {
  const regdocdate = req.session.regdocdate || '';
  const sroname = req.session.sroname;
  const docno = req.session.docno;
    const encdate = req.session.encdate;
  const bvsno = req.session.bvsno;
  const executants = req.session.executants;
 const sessionID = req.sessionID;
  const user = req.cookies.user;
  console.log('Session Variables:', req.session.sroname, req.session.docno, req.session.regdocdate);
  console.log(req.sessionID);
  console.log(req.session.docno);
 // Check if the user is logged in
 if (user && user.loggedIn) {
    res.setHeader('Cache-Control', 'no-store');
    res.render('searchrprt', {regdocdate: regdocdate,sroname: sroname,docno: docno,encdate: encdate,bvsno: bvsno,executants: executants});
  } else {
    res.redirect('/');
  }
});

router.post('/searchrprt',function(req, res,next)  {
  req.session.regdocdate = req.body.regdocdate || req.session.regdocdate || '';
  req.session.sroname = req.body.sroname || req.session.sroname || '';
  req.session.docno = req.body.docno || req.session.docno || '';
  req.session.encdate = req.body.encdate || req.session.encdate || '';
  req.session.bvsno = req.body.bvsno || req.session.bvsno || '';
  req.session.executants = req.body.executants || req.session.executants || '';
  console.log('Session Variables:', req.session.sroname, req.session.docno, );
  console.log(req.sessionID);
  res.redirect('/ab/hhh');
});





module.exports = router;