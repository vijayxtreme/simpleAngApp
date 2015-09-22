var db = require('./db');

var Post = db.model('User', {
	name: { type: String, required: true },
	age: { type: Number, required: true },
	profession: { type: String, required: true },
	hobbies: { type: String, required: true },
	glyph: { type: String, required: true, default: 'glyphicon-star'}
});

module.exports = Post;