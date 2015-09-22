var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', function(){
	console.log('mongodb connected')
})

module.exports = mongoose;