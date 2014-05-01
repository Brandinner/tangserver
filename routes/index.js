var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '' });
});

// TODO: invalid url links to index.

// Games
//==================================================
router.get('/games', function(req, res) {
	res.render('games'); 
});

router.get('/games/flappy', function(req, res) {
	res.render('flappy.hjs');
});
//==================================================

// About us
router.get('/aboutus', function(req, res) {
	res.render('aboutus.hjs');
});

// Projects
router.get('/projects', function(req, res) {
	res.render('index.hjs');
});

// Blog
router.get('/blog', function(req, res) {
	res.render('index.hjs');
});
module.exports = router;
