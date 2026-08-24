const router = require("express").Router();
const controller = require("../controllers/bookingController");
const { protect, allowRoles } = require("../middleware/auth");
router.use(protect);
router.get("/", controller.listBookings);
router.post("/", allowRoles("organizer", "admin"), controller.createBooking);
router.patch("/:id/status", controller.updateBookingStatus);
module.exports = router;
