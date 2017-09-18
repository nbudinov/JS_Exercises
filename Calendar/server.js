var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'sampleDB'
});

connection.connect(function(err) {
	if(!!err) {
		console.log('error');
	} else {
		console.log('Connected');
	}
})

app.post('/reservations', function(req, resp) {

	connection.query("INSERT INTO reservations SET ?", req.body, function(err, res) {
		if(err)
        {
            console.log('DA _ ',err);
            return;
        }
		resp.send(res);
		// console.log(res);
	})
})

app.get('/reservations', function(req, resp) {
	connection.query("SELECT * FROM reservations", function(error, rows, fields) {
		if(!error) {
			resp.json(rows);
		} else {
			console.log('unsuccessful query');
		}
	})
})

app.listen(1337);
