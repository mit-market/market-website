var viewController = {}

var path = require('path');

viewController.index = function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/views/index.html'));
};

module.exports = viewController;
