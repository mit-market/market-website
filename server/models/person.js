var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Person', personSchema);
