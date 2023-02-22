const express = require('express');
const router = express.Router();
const News = require('../models/news');


/* GET home page. */
router.all("*",(req,res,next)=>{
 if(!req.session.admin){
   res.redirect('login');
   return;
 }

 next();
});

router.get('/', function(req, res) {
  // const newsDta=new News({
  //   title:"Testowy",
  //   desc:'Opis',
  // });

  // newsDta.save((err)=>{
  //   console.log(err);
  // })

  res.render('admin/index', { title: 'Admin'});


});



module.exports = router;
