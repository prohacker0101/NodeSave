var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('case', { title: 'case' });
});

module.exports = router;
