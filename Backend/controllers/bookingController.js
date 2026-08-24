const mongoose = require("mongoose");
const Availability = require("../models/Availability");
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");

const createBooking = asyncHandler(async (req, res) => {
  const event = await Event.findOne({ _id: req.body.event, organizer: req.user.id });
  if (!event) throw new ApiError(404, "Event not found or access denied");

  const slot = await Availability.findOneAndUpdate(
    { _id: req.body.availability, isBooked: false },
    { isBooked: true },
    { new: true },
  );
  if (!slot) throw new ApiError(409, "Availability is unavailable or already booked");

  try {
    const booking = await Booking.create({
      event: event.id,
      availability: slot.id,
      organizer: req.user.id,
      speaker: slot.speaker,
      message: req.body.message,
    });
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    await Availability.findByIdAndUpdate(slot.id, { isBooked: false });
    throw error;
  }
});

const listBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ $or: [{ organizer: req.user.id }, { speaker: req.user.id }] })
    .populate("event availability organizer speaker", "title startAt endAt name email")
    .sort({ createdAt: -1 });
  res.json({ success: true, count: bookings.length, data: bookings });
});

const updateBookingStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  if (!Booking.schema.path("status").enumValues.includes(status)) throw new ApiError(400, "Invalid booking status");
  const booking = await Booking.findOne({
    _id: req.params.id,
    $or: [{ organizer: req.user.id }, { speaker: req.user.id }],
  });
  if (!booking) throw new ApiError(404, "Booking not found or access denied");

  const isSpeakerDecision = ["confirmed", "declined"].includes(status);
  if (isSpeakerDecision && !booking.speaker.equals(req.user.id)) throw new ApiError(403, "Only the speaker can confirm or decline");
  if (status === "cancelled" && !booking.organizer.equals(req.user.id)) throw new ApiError(403, "Only the organizer can cancel");

  booking.status = status;
  await booking.save();
  if (["declined", "cancelled"].includes(status)) await Availability.findByIdAndUpdate(booking.availability, { isBooked: false });
  res.json({ success: true, data: booking });
});

module.exports = { createBooking, listBookings, updateBookingStatus };
