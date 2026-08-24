const Availability = require("../models/Availability");
const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");

const createAvailability = asyncHandler(async (req, res) => {
  const availability = await Availability.create({ ...req.body, speaker: req.user.id });
  res.status(201).json({ success: true, data: availability });
});

const listAvailability = asyncHandler(async (req, res) => {
  const filter = { isBooked: false };
  if (req.query.speaker) filter.speaker = req.query.speaker;
  const slots = await Availability.find(filter).populate("speaker", "name avatar").sort({ startAt: 1 });
  res.json({ success: true, count: slots.length, data: slots });
});

const updateAvailability = asyncHandler(async (req, res) => {
  const slot = await Availability.findOneAndUpdate(
    { _id: req.params.id, speaker: req.user.id, isBooked: false },
    req.body,
    { new: true, runValidators: true },
  );
  if (!slot) throw new ApiError(404, "Availability not found, booked, or access denied");
  res.json({ success: true, data: slot });
});

const deleteAvailability = asyncHandler(async (req, res) => {
  const slot = await Availability.findOneAndDelete({ _id: req.params.id, speaker: req.user.id, isBooked: false });
  if (!slot) throw new ApiError(404, "Availability not found, booked, or access denied");
  res.status(204).send();
});

module.exports = { createAvailability, listAvailability, updateAvailability, deleteAvailability };
