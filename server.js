var express = require('express');

var app = express();
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
  if (res.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(port, function (){
  console.log('The port is listening on port' + PORT);
});
