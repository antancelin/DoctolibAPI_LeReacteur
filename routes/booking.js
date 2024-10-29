const express = require("express"); // import du package 'express'

const Booking = require("../models/Booking"); // import du modèle

const router = express.Router(); // import de l'outils pour rassembler les routes

// CRUD

// READ => GET
router.get("/visits", async (req, res) => {
  try {
    const booking = await Booking.findOne({ date: req.query.date });

    if (booking) {
      res.json(booking);
    } else {
      const newBooking = {
        date: req.query.date,
        slots: {
          1000: { isAvailable: true, name: "" },
          1030: { isAvailable: true, name: "" },
          1100: { isAvailable: true, name: "" },
          1130: { isAvailable: true, name: "" },
          1400: { isAvailable: true, name: "" },
          1430: { isAvailable: true, name: "" },
          1500: { isAvailable: true, name: "" },
          1530: { isAvailable: true, name: "" },
          1600: { isAvailable: true, name: "" },
          1630: { isAvailable: true, name: "" },
          1700: { isAvailable: true, name: "" },
          1730: { isAvailable: true, name: "" },
        },
      };
      const newDate = new Booking(newBooking);
      await newDate.save();
      res.json(newDate);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// CREATE => POST
router.post("/visits", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
