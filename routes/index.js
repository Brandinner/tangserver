var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'TangServer' });
});



// Games
//==================================================
router.get('/games', function(req, res) {
	res.render('games'); 
});

router.get('/games/flappy', function(req, res) {
	res.render('flappy.hjs');
});
//==================================================


module.exports = router;
