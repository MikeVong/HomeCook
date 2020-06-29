const router = require("express").Router();
const cooksController = require("../../controllers/cooksController");

// Matches with "/api/cooks"
router.route("/")
  .get(cooksController.findAll)
  .post(cooksController.create);

// Matches with "/api/cooks/:id"
router
  .route("/:id")
  .get(cooksController.findById)
  .put(cooksController.update)
  .delete(cooksController.remove);

module.exports = router;
