var personHandler = {};

var Person = require('../models/person');

personHandler.create = function (req, res) {

    var person = Person({
        name: req.body.name,
        email: req.body.email
    });

    person.save(function(err) {
        if (err) throw err;
    });

    res.send('new person added');

};

module.exports = personHandler;
