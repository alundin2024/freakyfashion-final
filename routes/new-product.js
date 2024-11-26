// Denna fil bör kunnas tas bort?

var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Administration'});
  console.log("Funkar definitvt också!");
});

module.exports = router;