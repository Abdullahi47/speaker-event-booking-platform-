const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 150 },
    description: { type: String, required: true, trim: true, maxlength: 5000 },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    speaker: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
    location: { type: String, required: true, trim: true },
    format: { type: String, enum: ["online", "in-person", "hybrid"], default: "in-person" },
    status: { type: String, enum: ["draft", "published", "cancelled", "completed"], default: "draft" },
    capacity: { type: Number, min: 1, default: 1 },
  },
  { timestamps: true },
);

eventSchema.pre("validate", function validateDates() {
  if (this.startAt && this.endAt && this.endAt <= this.startAt) {
    this.invalidate("endAt", "endAt must be after startAt");
  }
});

module.exports = mongoose.model("Event", eventSchema);
