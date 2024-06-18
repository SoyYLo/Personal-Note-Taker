const path = require('path');
const router = require("express").Router()
    // Notes page
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/notes.html"));
});

// Index page
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
});

module.exports = router;

//Done!