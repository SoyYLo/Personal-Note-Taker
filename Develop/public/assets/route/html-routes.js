const path = require('path');

module.exports = function (app) {
    // Notes page
    app.get("/notes", function (req, res) {
        res.sendFile(path,join(_dirname + "/../public/notes.html"));
    });

    // Index page
    app.get("/", function (req, res) {
        res.sendFile(path.join(_dirname + "/../public/index.html"));
    });
};