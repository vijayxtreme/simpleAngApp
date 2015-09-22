var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())

//Enable CORS requests (for development only)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next){
	res.json([{
		username: 'vijay',
		age: 32,
		profession: 'web developer',
		hobbies: 'likes tech, apple products, video games',
		glyph: 'glyphicon-fire'
	},
	{
		username: 'carlos',
		age: 29,
		profession: 'web designer',
		hobbies: 'hates sean, loves processors',
		glyph: 'glyphicon-sunglasses'

	},
	{
		username: 'disha',
		age: 29,
		profession: 'the boss',
		hobbies: 'likes starbucks cookie straws',
		glyph: 'glyphicon-glass'

	},
	{
		username: 'chan',
		age: 29,
		profession: 'copywriter',
		hobbies: 'likes to dress up with dead animals',
		glyph: 'glyphicon-piggy-bank'
	}
	])
});

app.listen(3000, function(){
	console.log("Server listening on", 3000);
})