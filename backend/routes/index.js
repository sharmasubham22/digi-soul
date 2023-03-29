const express = require("express");
const router = express.Router();
const routes = require("../api/routes/eventRoutes");

router.use("/events", routes);

module.exports = router;
