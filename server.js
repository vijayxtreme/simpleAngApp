var express = require('express'),
	cors = require('cors');
var bodyParser = require('body-parser');

var Post = require('./post');

var app = express();
app.use(bodyParser.json());
app.use(cors());

//Enable CORS requests (for development only)
/*app.use(function(req, res, next) {
 // res.header("Access-Control-Allow-Origin", "*");
 // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();
});*/

app.get('/', function(req, res, next){
	Post.find(function(err, posts){
		if(err){return next(err)}
		res.json(posts);
	})
});

app.post('/save', function(req, res, next){
	var post = new Post({
		name: req.body.name,
		age: parseInt(req.body.age),
		profession: req.body.profession,
		hobbies: req.body.hobbies,
		glyph: req.body.glyph
	});

	post.save(function(err, post){
		if(err){ return next(err) }
		res.json(201, post);
	});
});

app.post('/del', function(req, res, next){
	Post.remove({'name':req.body.name}, function(err){
		if(err){return next(err)}
		res.json([{
			'message':'Deleted user'
		}]);
	})
})


app.listen(3000, function(){
	console.log("Server listening on", 3000);
})