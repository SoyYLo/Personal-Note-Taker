const inquirer = require('inquirer');
const express = require('express');
const path = require('path');
const routes = require("./routes")
// express app
const app = express()
const PORT = 3001;


// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware pointing to public folder
app.use(express.static('public'));


//require("./routes/html-routes.js")(app);
//require("./routes/api/noteRoutes")(app);
app.use("/", require("./routes/html-routes.js"));
app.use('/api', require("./routes/api/noteRoutes"));

app.use(routes)
app.listen(PORT, function() {
    console.log('App listeining on PORT: ' + PORT)
});