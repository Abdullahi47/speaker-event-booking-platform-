const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema(
  {
    speaker: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
    timezone: { type: String, trim: true, default: "UTC" },
    isBooked: { type: Boolean, default: false },
    notes: { type: String, trim: true, maxlength: 500, default: "" },
  },
  { timestamps: true },
);

availabilitySchema.index({ speaker: 1, startAt: 1, endAt: 1 }, { unique: true });
availabilitySchema.pre("validate", function validateDates() {
  if (this.startAt && this.endAt && this.endAt <= this.startAt) {
    this.invalidate("endAt", "endAt must be after startAt");
  }
});

module.exports = mongoose.model("Availability", availabilitySchema);
