const Event = require("../models/Event");
const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");

const createEvent = asyncHandler(async (req, res) => {
  const event = await Event.create({ ...req.body, organizer: req.user.id });
  res.status(201).json({ success: true, data: event });
});

const listEvents = asyncHandler(async (req, res) => {
  const filter = req.query.mine === "true" ? { organizer: req.user.id } : { status: "published" };
  const events = await Event.find(filter).populate("organizer speaker", "name email avatar").sort({ startAt: 1 });
  res.json({ success: true, count: events.length, data: events });
});

const getEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id).populate("organizer speaker", "name email avatar");
  if (!event) throw new ApiError(404, "Event not found");
  res.json({ success: true, data: event });
});

const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findOneAndUpdate({ _id: req.params.id, organizer: req.user.id }, req.body, { new: true, runValidators: true });
  if (!event) throw new ApiError(404, "Event not found or access denied");
  res.json({ success: true, data: event });
});

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findOneAndDelete({ _id: req.params.id, organizer: req.user.id });
  if (!event) throw new ApiError(404, "Event not found or access denied");
  res.status(204).send();
});

module.exports = { createEvent, listEvents, getEvent, updateEvent, deleteEvent };
