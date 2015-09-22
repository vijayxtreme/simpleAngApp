var express = require('express');
var bodyParser = require('body-parser');

var Post = require('./post');

var app = express();
app.use(bodyParser.json())

//Enable CORS requests (for development only)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next){
	Post.find(function(err, posts){
		if(err){return next(err)}
		res.json(posts);
	})
});

app.listen(3000, function(){
	console.log("Server listening on", 3000);
})