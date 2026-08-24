const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    speaker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Speaker",
      required: true,
    },

    eventName: {
      type: String,
      required: true,
      trim: true,
    },

    eventDescription: {
      type: String,
      required: true,
    },

    eventDate: {
      type: Date,
      required: true,
    },

    eventLocation: {
      type: String,
      required: true,
    },

    duration: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "cancelled", "completed"],
      default: "pending",
    },

    message: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);