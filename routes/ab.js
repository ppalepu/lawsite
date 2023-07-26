var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fs = require('fs');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: true
}));


router.get('/perdetails', function(req, res)  {
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
    res.render('perdetails', {branchname: branchname,branchmandal: branchmandal,branchdistrict: branchdistrict,clientname: clientname,clientfather: clientfather,clientvillage: clientvillage,clientmandal: clientmandal,clientdistrict: clientdistrict,regdocdate: regdocdate,sroname: sroname,docno: docno,propsurno: propsurno,propdoorno: propdoorno,propolddoorno: propolddoorno,proparea: proparea,propdistrict: propdistrict,propmandal: propmandal,propvillage: propvillage,proptype: proptype,propage: propage,propsinceyr: propsinceyr,encdate: encdate,bvsno: bvsno,executants: executants});
  } else {
    res.redirect('/');
  }
});
  

router.post('/perdetails',function(req, res)  {

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

router.get('/scheduleprop', function(req, res)  {
  const docno = req.session.docno || '';
  const sroname = req.session.sroname || '';
  const propsurno = req.session.propsurno || '';
  const propdoorno = req.session.propdoorno || '';
  const regdocdate = req.session.regdocdate || '';
  const proparea = req.session.proparea || '';
  const propdistrict = req.session.propdistrict || '';
  const propmandal= req.session.propmandal || '';
  const propvillage = req.session.propvillage || '';
  const sessionID = req.sessionID;
  const user = req.cookies.user;
  console.log('Session Variables:', req.session.docno, req.session.sroname, req.session.propsurno);
  console.log(req.sessionID);
 // Check if the user is logged in
 if (user && user.loggedIn) {
    res.render('scheduleprop', {docno: docno,sroname: sroname,propsurno: propsurno,propdoorno: propdoorno,regdocdate: regdocdate,proparea: proparea,propmandal: propmandal,propvillage: propvillage,propdistrict: propdistrict} );
  } else {
    res.redirect('/');
  }
});

router.post('/scheduleprop',function(req, res)  {
  const body= req.body;
  const sroname = body.sroname || '';
  const docno = body.docno || '';
  const propsurno = body.propsurno || '';
  const propdoorno = body['propdoorno'] || '';
  const regdocdate = body['regdocdate'] || '';
  const proparea = body['proparea'] || '';
  const propdistrict = body['propdistrict'] || '';
  const propmandal = body['propmandal'] || '';
  const propvillage = body['propvillage'] || '';

  
  req.session.docno = docno;
  req.session.sroname = sroname;
  req.session.regdocdate = regdocdate;
  req.session.propsurno = propsurno;
  req.session.propdoorno = propdoorno;
  req.session.proparea = proparea;
  req.session.propdistrict = propdistrict;
  req.session.propmandal = propmandal;
  req.session.propvillage = propvillage;
 
  const schedulepropHTML = `
                    <form action="/ab/scheduleprop" method="POST">
                <textarea rows="10" cols="100">
                  A.Survey No.(in case of land property):-.${propsurno} After Sub Divison R.S.No.
                  B.Door No. (in case of House Property): Near the house bearing Door No. ${propdoorno}., As per House Tax House bearing door No.${propdoorno}
                  C.Extent / Area: ${proparea}
                  D.Location and boundaries	: As Given Below
                  (PROPERTY REFERRED IN THE REGISTERED SALE DEED DATED. ${regdocdate}  VIDE DOCUMENT NO.${docno} OF 2013   OF ${sroname} SRO )
                  District:${propdistrict} Dist Registry:${sroname} SRO Mandal: ${propmandal}     
                  Village: ${propvillage} town with in ${propvillage} Municipal Area
                  All Part and Parcel of the site and RCC Dabha House ground and 
                  1st floor residential building bearing near the house bearing door no.${propdoorno}, 
                  As per House Tax House bearing door No.${propdoorno} for a middle extent of ${proparea}
                  out of full extent of  Ac. 0-33 ½ cents of site  in 14th block, 
                  ${propvillage} town with in ${propvillage} Municipal 
                  Area in R.S.No. after sub division R.S.No. bounded by:-
                  East: 35-06 Feet=10.820 Meters – Site belongs to Sheik Babulu  
                  West: 35-06 Feet=10.820 Meters – Road for a width of 20 feet  
                  North: 49-06 feet = 15.087 meters = Site belongs to Seeram Nookaraju and Raghu Babu
                  South: 49-06 feet = 15.087 meters = Road for a width of 20 feet  
                  Within the above said boundaries site for an extent of ${proparea}
                  of site and RCC Dabha house  with all doors, doorways, windows, roof etc., 
                  with all usual pathways, water ways, vehicular ways etc., with all easementary rights, 
                  corporeal and incorporeal rights etc.,
                  Out of that, As per Registered Gift Deed dated. 06-09-2022 vide doc No. ${docno} of 2022  of ${sroname} SRO., 
                  executed in favour of Ramachandrapuram Municipality  Rep. By its Present Municipal Commissioner Kusam Srikantha Reddy,
                  gifted by Kantipudi Sai Ram for an extent of 11-66 sq. yards = 9.74 sq. meters Now remaining extent of 182.34 sq.
                  yards = 152.46 sq.yards and house therein available for mortgage. 
                </textarea>
                <br>
                <br>
                <div class="col-sm-3">
                  <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </div> 
              </form>
  `;
 
  //console.log('schedulepropHTML:', req.session.schedulepropHTML);
  req.session.schedulepropHTML = schedulepropHTML;
  console.log('schedulepropHTML:', req.session.schedulepropHTML);
  console.log('Session Variables:', req.session.docno, req.session.sroname, req.session.regdocdate);
  console.log(req.sessionID);
    res.redirect('/ab/mortgagor');
  });

router.get('/mortgagor', function(req, res)  {
  const regdocdate = req.session.regdocdate;
  const docno = req.session.docno;
  const bvsno = req.session.bvsno;
  const executants = req.session.executants;
  const nature = req.session.nature;
  const dateOfPresentation = req.session.dateOfPresentation;
  const pages = req.session.pages;
  const claimants = req.session.claimants;
  const regOffice = req.session.regOffice;

 const sessionID = req.sessionID;
  const user = req.cookies.user;
  console.log('Session Variables:', req.session.docno, req.session.regdocdate);
  console.log(req.sessionID);
 // Check if the user is logged in
 if (user && user.loggedIn) {
    res.render('mortgagor', {regdocdate: regdocdate,docno: docno,bvsno: bvsno,executants: executants,nature: nature,dop: dateOfPresentation,pages: pages,claimants: claimants,regOffice: regOffice});
  } else {
    res.redirect('/');
  }
});


router.post('/mortgagor', function(req, res) {
  const { body } = req;

  const docno = body['DOC No'] || '';
  const nature = body['Nature of the Document'] || '';
  const regdocdate = body['Reg DOC Date'] || '';
  const executants = body.Executants || '';
  const claimants = body.claimants || '';
  const regOffice = body['Reg Office'] || '';
  const bvsno = body['Book/Volume/Scan No'] || '';
  const pages = body['No. of pages'] || '';
  const dateOfPresentation = body.dateOfPresentation || '';

  req.session.docno = docno;
  req.session.nature = nature;
  req.session.regdocdate = regdocdate;
  req.session.executants = executants;
  req.session.claimants = claimants;
  req.session.regOffice = regOffice;
  req.session.bvsno = bvsno;
  req.session.pages = pages;
  req.session.dateOfPresentation = dateOfPresentation;

  // Store the HTML code of the table in a session variable
  const tableHTML = `
    <table id="mytable" class="table table-fixed table-bordered align-middle mytable">
      <tr> 
        <td>DOC No</td>
        <td contenteditable="true">${docno}</td>
      </tr>
      <tr>
        <td>Nature Of The Document</td>
        <td contenteditable="true">Registration Partition Deed</td>
      </tr>
      <tr>
        <td>Date of presentation</td>
        <td contenteditable="true">${dateOfPresentation}</td>
      </tr>
      <tr>
        <td>Reg DOC Date</td>
        <td contenteditable="true">${regdocdate}</td>
      </tr>
      <tr>
        <td>Executants</td>
        <td contenteditable="true">${executants}</td>
      </tr>
      <tr>
        <td>Claimants</td>
        <td contenteditable="true">${claimants}</td>
      </tr>
      <tr>
        <td>Registration office</td>
        <td contenteditable="true">${regOffice}</td>
      </tr>
      <tr>
        <td>Book No./Volume No./Scan No.</td>
        <td contenteditable="true">${bvsno}</td>
      </tr>
      <tr>
        <td>No. of pages</td>
        <td contenteditable="true">${pages}</td>
      </tr>
    </table>
  `;
  req.session.tableHTML = tableHTML;
  console.log('Table HTML:', req.session.tableHTML);
  res.redirect('/ab/scruntinised');
});



router.get('/scruntinised', function(req, res)  {
  
  const tableData = req.session.tableData || [];
  const sessionID = req.sessionID;
  const user = req.cookies.user;
  console.log(req.sessionID);
 // Check if the user is logged in
 if (user && user.loggedIn) {
  let scruntinisedDocuments = [];

  try {
    // Parse the tableData string to convert it back to an array
    scruntinisedDocuments = JSON.parse(tableData);
  } catch (error) {
    console.error('Error parsing tableData:', error);
  }

  res.render('scruntinised', { scruntinisedDocuments });
} else {
  res.redirect('/');
}
});


router.post('/scruntinised', (req, res) => {
  const tableData = req.body.tableData;
  
  req.session.tableData = tableData;
  res.redirect('/ab/lstdoc');
});

router.get('/lstdoc', function(req, res)  {
  
  const tabData = req.session.tabData || [];
  const sessionID = req.sessionID;
  const user = req.cookies.user;
  console.log(req.sessionID);
 // Check if the user is logged in
 if (user && user.loggedIn) {
  let lstDocuments = [];

  try {
    // Parse the tableData string to convert it back to an array
    lstDocuments = JSON.parse(tabData);
  } catch (error) {
    console.error('Error parsing tabData:', error);
  }

  res.render('lstdoc', { lstDocuments });
} else {
  res.redirect('/');
}
});


router.post('/lstdoc', (req, res) => {
  const tabData = req.body.tabData;
  
  req.session.tabData = tabData;
  res.redirect('/ab/finaldoc');
});



router.get('/finaldoc', function(req, res)  {
  const regdocdate = req.session.regdocdate;
  const docno = req.session.docno;
  const bvsno = req.session.bvsno;
  const executants = req.session.executants;
  const nature = req.session.nature;
  const dateOfPresentation = req.session.dateOfPresentation;
  const pages = req.session.pages;
  const claimants = req.session.claimants;
  const regOffice = req.session.regOffice;

  const sessionID = req.sessionID;
  const user = req.cookies.user;
 // console.log('Session Variables:', req.session.docno, req.session.regdocdate);
  console.log(req.sessionID);
 // Check if the user is logged in
 if (user && user.loggedIn) {
    res.render('finaldoc',{tableHTML: tableHTML,regdocdate: regdocdate,docno: docno,bvsno: bvsno,executants: executants,nature: nature,dop: dateOfPresentation,pages: pages,claimants: claimants,regOffice: regOffice});
  } else {
    res.redirect('/');
  }
});



module.exports = router;
