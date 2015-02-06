var flake = require('simpleflake');
var express = require('express');
var app = express();

app.disable('etag');
app.disable('x-powered-by');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  res.contentType('text/plain');
  next();
});

app.get('/', function(request, response) {
  response.send(flake().toString('base58'));
});

app.get('/bigint', function(req, res) {
  res.send(flake().toString('base10'));
});

app.get('/hex', function(req, res) {
  res.send(flake().toString('hex'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
