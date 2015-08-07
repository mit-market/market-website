// REQUIRES //
var express = require('express');
var router = express.Router();

// CONTROLLERS
var returnIndex = require('../controllers/returnIndex');

// ROUTES
router.get('/', returnIndex);

module.exports = router;