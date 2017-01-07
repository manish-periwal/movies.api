var express = require('express');
var moviesRouter = require('./routes/moviesRouter')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db=mongoose.connect("mongodb://localhost/MoviesDb");

var app = express();
app.use(bodyParser.json());



app.use('/movies',moviesRouter);

app.listen(3000,function(){
	console.log("Server running at port 3000");
});