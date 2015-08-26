// ROUTER //
var router = require('express').Router();

// HANDLERS //
var personHandler = require('../handlers/person-handler');

// ROUTES //
router.post('/person/create', personHandler.create)
router.get('/*', function (req, res) { res.send('welcome to api'); });

module.exports = router;
