const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../model/user");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 12).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });
});

module.exports = router;
