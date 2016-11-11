var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));

var view_engine = 'ejs';
app.set('views', './views/' + view_engine);
app.set('view engine', view_engine);

// plans to add db logging using a logger module
/*var logger = require('./logger');
app.use(logger);*/

var calculator = require('./calculator');
app.use('/', calculator);

app.listen(port, function() {
	console.log('calculator app listening on port '+port);
});
