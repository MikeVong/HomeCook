const router = require("express").Router();
const cookRoutes = require("./cooks");

// Book routes
router.use("/cooks", cookRoutes);

module.exports = router;
