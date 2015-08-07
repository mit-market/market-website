var path = require('path');

function returnIndex (req, res) {
    // repsond with index.html
    res.sendFile(path.join(__dirname, '../../client/views/index.html'));
};

module.exports = returnIndex;
