var express = require('express');
var router = express.Router();
var users = require('../users/users');

/* GET users listing. */
router.get('/', function(req, res, next) {

  console.log(req.query);

  var username = req.query['username'];
  var password = users[username];

  if(password === req.query['password'])
    res.end('ok');
  else {
      res.status(401);
      res.end('unauthorized');
  }
});

module.exports = router;
