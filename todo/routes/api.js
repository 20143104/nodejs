var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/todo')
    .get(function(req, res, next){
        res.render('rest', { title: 'REST_API_GET' });
    })
    .put(function(req, res, next) {
        res.render('rest', { title: 'REST_API_PUT' });
    })
    .post(function(req, res, next) {
        res.render('rest', { title: 'REST_API_POST' });
    })
    ;
router.route('/todo/:id')
    .get(function(req, res, next){
        res.send('get by id ' + req.params.id);
    })
    .delete(function(req, res){
        return res.json({message : "ID(" + req.params.id + ") successfully deleted!"});
      })
    ;
module.exports = router;
