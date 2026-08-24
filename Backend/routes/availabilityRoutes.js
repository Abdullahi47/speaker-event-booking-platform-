const router = require("express").Router();
const controller = require("../controllers/availabilityController");
const { protect, allowRoles } = require("../middleware/auth");
router.get("/", controller.listAvailability);
router.post("/", protect, allowRoles("speaker", "admin"), controller.createAvailability);
router.route("/:id").patch(protect, controller.updateAvailability).delete(protect, controller.deleteAvailability);
module.exports = router;
