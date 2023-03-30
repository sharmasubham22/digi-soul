const express = require("express");
const router = express.Router();

router.use('/events', require("../api/events/routes/eventRoutes"));

module.exports = router;