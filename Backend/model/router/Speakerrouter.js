const express = require("express");
const router = express.Router();

const Speaker = require("../models/Speaker");

// CREATE SPEAKER
router.post("/", async (req, res) => {
  try {
    const speaker = await Speaker.create(req.body);

    res.status(201).json({
      success: true,
      message: "Speaker created successfully",
      speaker,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET ALL SPEAKERS
router.get("/", async (req, res) => {
  try {
    const speakers = await Speaker.find().populate("user");

    res.status(200).json({
      success: true,
      speakers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// GET SINGLE SPEAKER
router.get("/:id", async (req, res) => {
  try {
    const speaker = await Speaker.findById(req.params.id).populate("user");

    if (!speaker) {
      return res.status(404).json({
        success: false,
        message: "Speaker not found",
      });
    }

    res.status(200).json({
      success: true,
      speaker,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// UPDATE SPEAKER
router.put("/:id", async (req, res) => {
  try {
    const speaker = await Speaker.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!speaker) {
      return res.status(404).json({
        success: false,
        message: "Speaker not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Speaker updated successfully",
      speaker,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// DELETE SPEAKER
router.delete("/:id", async (req, res) => {
  try {
    const speaker = await Speaker.findByIdAndDelete(req.params.id);

    if (!speaker) {
      return res.status(404).json({
        success: false,
        message: "Speaker not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Speaker deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;