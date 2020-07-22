const router = require("express").Router();
const cookRoutes = require("./cooks");

// Cook routes
router.use("/cooks", cookRoutes);

module.exports = router;
