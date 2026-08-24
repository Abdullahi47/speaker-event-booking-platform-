const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    availability: { type: mongoose.Schema.Types.ObjectId, ref: "Availability", required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    speaker: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, trim: true, maxlength: 1000, default: "" },
    status: { type: String, enum: ["pending", "confirmed", "declined", "cancelled"], default: "pending" },
  },
  { timestamps: true },
);

bookingSchema.index({ event: 1, speaker: 1 }, { unique: true });

module.exports = mongoose.model("Booking", bookingSchema);
