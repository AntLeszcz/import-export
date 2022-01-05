'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    res.send(`<iframe width="420" height="315"
    src="https://youtu.be/PLiKpF-tLE0">
    </iframe>`);
});

app.listen(process.env.PORT || 3000, function () {
    return console.log("serwer listening - port 3000");
});
//# sourceMappingURL=index.js.map