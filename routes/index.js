var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  // res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  console.log(tweets);
  res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: tweets } );
});

router.get('/tweets/:id', function (req, res) {
  var id = req.params.id;
  var tweets = tweetBank.find( {id: id} );
  // res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  console.log(tweets);
  res.render( 'index', { title: 'Welcome to Twitte', tweets: tweets } );
});

// router.get('/xyz', function(req, res) {
//   res.sendFile("/Users/christopherdemoll/Fullstack/twitter-js/public/stylesheets/style.css");
// });

module.exports = router;
