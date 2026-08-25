const express = require('express')
const controller = require('../controllers/speakerController')
const auth = require('../middleware/authMiddleware')
const requireRole = require('../middleware/roleMiddleware')
const createUpload = require('../middleware/uploadMiddleware')
const asyncHandler = require('../utils/asyncHandler')

const router = express.Router()
const speakerUpload = createUpload('speakers')

router.get('/', asyncHandler(controller.listSpeakers))
router.post('/', auth, requireRole('speaker'), asyncHandler(controller.createSpeaker))
router.post('/profile-image', auth, requireRole('speaker'), speakerUpload.single('profileImage'), asyncHandler(controller.uploadProfileImage))
router.get('/:id/availability', asyncHandler(controller.getAvailability))
router.get('/:id/bookings', auth, asyncHandler(controller.getBookings))
router.get('/:id', asyncHandler(controller.getSpeaker))
router.put('/:id', auth, asyncHandler(controller.updateSpeaker))
router.delete('/:id', auth, asyncHandler(controller.deleteSpeaker))

module.exports = router
