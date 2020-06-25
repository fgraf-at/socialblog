const bcrypt = require('bcrypt');
const User = require('../model/user');
const Friend = require('../model/friend');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 12).then((hash) => {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
      password: hash,
    });
    console.log(user)
    let friend = null;
    user.save(function (error, user) {
      if(error) {
        return res.status(500).json({
          message: error.message
        });
      }
      else if (!user) {
        return res.status(401).json({
          message: 'Authentication failed',
        });
      }else{
        const token = jwt.sign(
          {email: user.email, userId: user._id},
          'secret_key',
          {expiresIn: '1h'}
        );
        return res.status(200).json({
          id: user._id,
          token: token,
        });

      }
    })
  });
}

exports.userLogin = (req, res) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({
                    message: 'Authentication failed',
                });
            } else {
                fetchedUser = user;
                return bcrypt.compare(req.body.password, user.password);
            }
        })
        .then((result) => {
            if (!result) {
                return res.status(401).json({
                    message: 'Authentication failed',
                });
            } else {
                const token = jwt.sign(
                    { email: fetchedUser.email, userId: fetchedUser._id },
                    'secret_key',
                    { expiresIn: '1h' }
                );
                return res.status(200).json({
                    id: fetchedUser._id,
                    token: token,
                    nichname: fetchedUser.nickname
                });
            }
        })
        .catch((err) => {
            return res.status(401).json({
                message: 'Authentication failed',
            });
        });
}
