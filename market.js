// REQUIRES //
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

// EXPRESS //
var app = express();
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client')); // set client folder
app.set('view engine', 'html');	// set view engine as simple html reader
app.engine('html', function(path, options, cb) {
    fs.readFile(path, 'utf-8', cb);
});

// ROUTES //
routes = require('./server/routes/routes');
app.use('/', routes);
app.use(function(err, req, res, next) {
    res.status(err.status || 500); // general error handler
});

// LAUNCH //
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("running at localhost:" + port);
});
module.exports = app;
