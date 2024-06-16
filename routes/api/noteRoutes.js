// const uniqid = require("uniqid");
const router = require("express").Router()
// Routes
router.post("/", (req,res) => {
    const newNote = {
        ...req.body,
        id: uniqid(),
    };

    let data = fs.readFileSync("./db/db.json", "utf8");

    const dataJSON = JSON.parse(data);
})


module.exports = router;  