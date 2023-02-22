var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Dane z usera ' ,cosik: 'Dane do rendera_2'});
});

module.exports = router;
