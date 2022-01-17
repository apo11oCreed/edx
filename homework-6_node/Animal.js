var mongoose = require('mongoose');

// note: your host/port number may be different!
mongoose.connect('mongodb://localhost:27017/myDatabase', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
}).then(() => console.log('DB Connected!')).catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});

var Schema = mongoose.Schema;

var animalSchema = new Schema( {
	name: {type: String, required: true, unique: true},
	species: {type: String, required: true},
	breed: String,
	gender: {type: String, enum: ['male', 'female']},
	traits: [String],
	age: Number
    } );


module.exports = mongoose.model('Animal', animalSchema);
