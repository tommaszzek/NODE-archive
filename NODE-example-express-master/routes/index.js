const express = require('express');
const router = express.Router();
const News = require('../models/news');

const log ='admin';
const haslo ='123';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dane z redera_1' ,cosik: 'Dane do rendera_2'});
});
// Strona logowania admina
router.get('/login', function(req, res) {
  res.render('login', { title: 'Dane z redera_1' ,cosik: 'Dane do rendera_2'});
});

router.post('/login', function(req, res) {
  req.session.admin=1;
 const {login,password}  =req.body;

    if(log===login && password===haslo){
      res.redirect('./admin');
    }
    else{ res.redirect('./login');}
});
// koniec logowani admina
//dodawania artykułu w adminie
router.get('/news/add', function(req, res) {

  res.render('admin/news-form', { title: 'Dodaj news'});

});
router.post('/news/add', function(req, res) {
  const {title,opis}  =req.body;

    const newsDta=new News({
    title:title,
    desc:opis,
  });
  const err=newsDta.validateSync();
 console.log(err);

  newsDta.save((err)=>{
    console.log(err);
  })


  res.render('admin/news-form', { title: 'Dodaj news',err});
});

module.exports = router;
