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

var toySchema = new Schema( {
	id: {type: String, required: true, unique: true},
	name: {type: String, required: true},
	price: Number
    } );


module.exports = mongoose.model('Toy', toySchema);
