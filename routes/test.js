var express = require('express');
var router = express.Router();
const myObj = {
  "drinks": [
    { "name":"Coors Lite", "type":"4.2", "cals":102 },
    { "name":"Stone IPA", "type":"6.7", "cals":250 },
    { "name":"Budweiser", "type":"5.0", "cals":145 }
  ]
 };

/* GET test listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(myObj);
});

module.exports = router;