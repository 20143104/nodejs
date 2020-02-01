var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '퍼그 사용하기_조승현' });
});

module.exports = router;
