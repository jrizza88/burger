var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var app = express();
var port = process.env.PORT || 4000;
var ORM = require('./config/orm');
ORM.selectAll();

//================================================================
//MIDDLEWARE
//================================================================

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');



// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var connection = require('./config/connection');

var orm = require('./config/orm');

app.listen(port, function () {
	console.log('Listening on PORT: ' + port);
});
