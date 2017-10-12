var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), function (err) {
  if(err) {
    return console.log('Error while starting server');
  }
  console.log('Server started at http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

var rootDirectory = path.normalize(__dirname + '/../');
app.set('appPath', rootDirectory + '/client');

app.use(express.static(path.join(rootDirectory, '/client')));

app.get('/', function (req, res) {
  res.sendFile(app.get('appPath') + '/index.html');
});

// load the routes

require('./routes/index')(app);

module.exports = app;

