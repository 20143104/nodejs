var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '안녕하세요', data : ['1', 100, '헬로'] });
});

module.exports = router;
