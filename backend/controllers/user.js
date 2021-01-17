const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 12).then((hash) => {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
      password: hash,
    });
    let friend = null;
    user.save(function (error, user) {
      if (error) {
        return res.status(500).json({
          message: error.message
        });
      } else if (!user) {
        return res.status(401).json({
          message: 'Authentication failed',
        });
      } else {
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
};

exports.getUserFromNickname = (req, res, next) => {
  let returnValue = [];
  User.find({nickname: {$regex: '^(' + req.query.nickname + ').*$', $options: 'i'}}, function (error, user) {
    if (error) {
      return res.status(500).json({
        message: error.message
      });
    } else if (!user) {
      return res.status(401).json({
        message: 'Nickname could not be found: ' + req.body.nickname,
      });
    } else {

      user.map((x) => {
        returnValue = {
          nickname: x.nickname,
          email: x.email
        }
      });
      return res.status(200).json([{...returnValue}]);
    }
  })
};


exports.userLogin = (req, res) => {
  let fetchedUser;
  User.findOne({email: req.body.email})
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
                });
            }
        })
        .catch((err) => {
            return res.status(401).json({
                message: 'Authentication failed',
            });
        });
};
