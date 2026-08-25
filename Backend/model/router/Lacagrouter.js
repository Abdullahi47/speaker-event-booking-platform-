const express = require('express')
const controller = require('../controllers/paymentController')
const auth = require('../middleware/authMiddleware')
const requireRole = require('../middleware/roleMiddleware')
const asyncHandler = require('../utils/asyncHandler')

const router = express.Router()

router.use(auth)
router.post('/create', requireRole('organizer'), asyncHandler(controller.createPayment))
router.get('/', asyncHandler(controller.listPayments))
router.get('/:id', asyncHandler(controller.getPayment))

module.exports = router
