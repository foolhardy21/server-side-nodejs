var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool',function(req,res,next) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(`<h2>You're so cool</h2>`)
  res.end()
})

module.exports = router;
