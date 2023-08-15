require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

const router = express.Router();

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return res.status(422).json({ error: "please fill all the fields" });
  }
  User.findOne({ $or: [{ email: email }, { name: name }] })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exist with this email or name" });
      }

      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new User({
          email,
          password: hashedPassword,
          name,
        });

        user.save().then((message) => {
          return res.status(201).json({ message: "user created successfully" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
