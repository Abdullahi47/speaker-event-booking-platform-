const router = require("express").Router();
const controller = require("../controllers/eventController");
const { protect, allowRoles } = require("../middleware/auth");
router.use(protect);
router.route("/").get(controller.listEvents).post(allowRoles("organizer", "admin"), controller.createEvent);
router.route("/:id").get(controller.getEvent).patch(controller.updateEvent).delete(controller.deleteEvent);
module.exports = router;
