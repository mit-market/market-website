// ROUTER //
var router = require('express').Router();

// CONTROLLERS //
var viewController = require('../controllers/view-controller');
var personController = require('../controllers/person-controller');

// ROUTES //
router.get('/*', viewController.index);

module.exports = router;
