var express = require('express');
var path = require('path');
var app = express();

// Set Static files path
app.use(express.static(path.join(__dirname, 'public')));

// serving template files
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('index', {});
});

app.listen(9090);