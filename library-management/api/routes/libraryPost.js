//To post new changes
var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function(req, res, next) {
  
console.log() ;
let data = JSON.stringify(req.body);
console.log(data);
fs.writeFileSync('library.json', data);
  res.send(data);
});

module.exports = router;
