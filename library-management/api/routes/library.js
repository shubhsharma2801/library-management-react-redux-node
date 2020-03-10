var express = require('express');
var router = express.Router();
const fs = require('fs');
//To get all book data
router.get('/', function(req, res, next) {
let rawdata = fs.readFileSync('library.json');
  res.send(rawdata);
});

module.exports = router;
