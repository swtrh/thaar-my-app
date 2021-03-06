var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('store', { title: 'Express Store', message_url: process.env.message_url });
});

router.route('/message').post(function(req, res, next) {
  console.log('Reveiving message ' + req.body.message);
  res.send('Message was ' + req.body.message)
});

module.exports = router;
