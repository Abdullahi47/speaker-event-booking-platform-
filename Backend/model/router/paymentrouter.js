const express = require("express");
const Payment = require("../model/Payment");

const router = express.Router();

// CREATE PAYMENT
router.post("/", async (req, res) => {
  try {
    const payment = await Payment.create(req.body);

    res.status(201).json({
      message: "Payment created successfully",
      payment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Payment creation failed",
      error: error.message,
    });
  }
});

// GET ALL PAYMENTS
router.get("/", async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("bookingId")
      .populate("userId");

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get payments",
      error: error.message,
    });
  }
});

// GET SINGLE PAYMENT
router.get("/:id", async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate("bookingId")
      .populate("userId");

    if (!payment) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get payment",
      error: error.message,
    });
  }
});

// UPDATE PAYMENT STATUS
router.put("/:id", async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    res.status(200).json({
      message: "Payment updated successfully",
      payment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Payment update failed",
      error: error.message,
    });
  }
});

// DELETE PAYMENT
router.delete("/:id", async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);

    if (!payment) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    res.status(200).json({
      message: "Payment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Payment deletion failed",
      error: error.message,
    });
  }
});

module.exports = router;