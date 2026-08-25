const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema(
  {
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    payer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true, min: 0 },
    currency: { type: String, default: 'USD' },
    paymentMethod: { type: String, enum: ['evc_plus', 'zaad', 'sahal'], required: true },
    phoneNumber: { type: String, required: true },
    transactionId: { type: String, unique: true, sparse: true },
    status: { type: String, enum: ['pending', 'paid', 'failed', 'refunded', 'cancelled'], default: 'pending' },
    paidAt: Date,
    refundedAt: Date,
  },
  { timestamps: true }
)

paymentSchema.index({ booking: 1 }, { unique: true })

module.exports = mongoose.model('Payment', paymentSchema)
