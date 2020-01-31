var express = require('express');
var router = express.Router();

var books = [{
  "title" : "책1",
  "author" : "홍길동"
},
{
  "title" : "책2",
  "author" : "dkdkdk"
}]
/* GET /api/books */
router.route('/api/books')
  .get(function(req, res){
    console.log('Get /api/books');
    res.send(JSON.stringify(books));
  })
  .post(function(req, res){
    console.log('POST : ');
    var book = {};
    book.title = req.body.title;
    book.author = req.body.author;
    book.price = req.body.price;
    books.push(book);
    res.send(book);
  })
  ;

  /* GET /api/books/:id */
router.route('/api/books/:id')
  .get(function(req, res){
    console.log('Get /api/books/' + req.params.id);
    res.send('Request by ID: ' + req.params.id);
  })
  .put(function(req, res){
    var book = {};
    book.title = req.body.title;
    return res.json({title : book.title, message : 'book updated!'});
  })
  .delete(function(req, res){
    var book = {};
    book.title = req.body.title;
    return res.json({message : "ID(" + req.params.id + ") successfully deleted!"});
  })
  ;


  router.get('/books', function(req, res, next) {
    res.render('books', { title: '-------서고--------', data : books });
  });
module.exports = router;