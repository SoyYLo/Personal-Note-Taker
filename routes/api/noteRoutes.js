// const uniqid = require("uniqid");
const router = require("express").Router()
const { json } = require("express");
const fs = require("fs")
const path = require("path")
const dbPath = path.join( __dirname,"../../db/db.json");

// Routes

// Get request
router.get("/", (req,res) => {
let data = fs.readFileSync(dbPath, "utf8");
res.json(JSON.parse(data));
});

// Post request
router.post("/", (req,res) => {
    console.log("POST ROUTE!!!!1")
    let data = fs.readFileSync( dbPath, "utf8");
    const dataJSON = JSON.parse(data);
    console.log("====unparesed data below===== ")
    console.log(data)
    console.log('=====data json below')
    console.log(dataJSON)
    console.log(req.body)
    const newNote = {
        ...req.body,
        id: uniqid(),
    };
    dataJSON.push(newNote)
    fs.writeFileSync(dbPath, JSON.stringify(dataJSON))
    res.json(dataJSON)
})
// Delete request
router.delete("/notes/:id", (req, res) => {
    let data = fs.readFileSync(dbPath, "utf8");
    const dataJSON = JSON.parse(data);

    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
    });
    res.json(newNotes);
});


module.exports = router;  