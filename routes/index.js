
const router = require("express").Router()
const htmlRoutes = require("./html-routes");
const apiRoutes = require("./api")
//MAIN ROUTER PURPOSE
//API ROUTES OR HTML ROUTES
router.use("/api", apiRoutes)
router.use("/", htmlRoutes)

module.exports = router;