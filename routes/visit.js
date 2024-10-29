const express = require("express"); // import du package 'express'

const Visit = require("../models/Visit"); // import du modèle

const router = express.Router(); // import de l'outils pour rassembler les routes

// CRUD

// READ => GET
router.get("/visits", (req, res) => {
  try {
    console.log(req.params.date);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
