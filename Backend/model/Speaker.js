const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    bio: {
      type: String,
      required: true,
    },

    expertise: [
      {
        type: String,
        trim: true,
      },
    ],

    experience: {
      type: Number,
      required: true,
      min: 0,
    },

    location: {
      type: String,
      required: true,
    },

    languages: [
      {
        type: String,
      },
    ],

    hourlyRate: {
      type: Number,
      required: true,
      min: 0,
    },

    availability: {
      type: Boolean,
      default: true,
    },

    socialLinks: {
      linkedin: {
        type: String,
        default: "",
      },

      twitter: {
        type: String,
        default: "",
      },

      website: {
        type: String,
        default: "",
      },
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalBookings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Speaker", speakerSchema);
