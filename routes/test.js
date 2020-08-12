var express = require('express');
var router = express.Router();
const myObj = {
  "drinks": [
    { "name":"Name Name", "type":"Type Type", "cals":550 },
    { "name":"Name Name", "type":"Type Type", "cals":200 },
    { "name":"Name Name", "type":"Type Type", "cals":110 }
  ]
 };

/* GET test listing. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(myObj);
});

module.exports = router;