var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('games', { title: 'Games' });
});

router.get('/flappy', function(req, res) {
	res.render('flappy.hjs');
});

module.exports = router;
