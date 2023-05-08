const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Repair = require("../models/Repair.model");
const User = require("../models/User.model");


//CREATE A REQUEST
router.get('/contact', (req, res) => {
  res.render('form-request');
});

router.post("/contact", async (req, res) => {
  try {
    const newRequest = req.body;
    console.log(newRequest)
    await Repair.create(newRequest);
    res.render('form-request');
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;