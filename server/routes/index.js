// ROUTER //
var router = require('express').Router();

// HANDLERS //
var viewHandler = require('../handlers/view-handler');

// ROUTES //
router.get('/*', viewHandler.index);

module.exports = router;
