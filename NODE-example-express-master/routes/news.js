const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('news', { title: 'Dane z admin' ,cosik: 'Dane do rendera_2'});
});

module.exports = router;
