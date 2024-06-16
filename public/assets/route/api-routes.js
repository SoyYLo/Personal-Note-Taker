const uniqid = require("uniqid");

// Routes
module.exports = function (app) {
    // APi get requests
    app.get()



    // Api post requests
    app.post("/", (req,res) => {
        const newNote = {
            text: req.body.text,
            id: uniqid(),
        };

        let data = fs.readFileSync("./db/db.json", "utf8");

        const dataJSON = JSON.parse(data);
    })
}