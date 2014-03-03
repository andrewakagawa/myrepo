var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger()); 


app.get('/', function(request, response) {
    buf=fs.readFileSync('index.html');
    response.send(buf.toString('utf8', 0, buf.length));
});

app.get('/', function(request, response) {
    response.render('SDCO.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
