var express = require('express');
var app = express();

app.use(app.router);
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/login', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(1331);

console.log('Server running at http://127.0.0.1:1331/');