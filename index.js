var express = require('express');
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));

app.set('views', './views/ejs');
app.set('view engine', 'ejs');

/*var logger = require('./logger');
app.use(logger);*/

var calculator = require('./calculator');
app.use('/', calculator);

app.listen(port, function() {
	console.log('calculator app listening on port '+port);
});