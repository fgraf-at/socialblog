const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 12).then((hash) => {
        const user = new User({
            email: req.body.email,
            password: hash,
        });
        user.save()
            .then((user) => {
                if (!user) {
                    return res.status(401).json({
                        message: 'Authentication failed',
                    });
                } else {
                    const token = jwt.sign(
                        { email: user.email, userId: user._id },
                        'secret_key',
                        { expiresIn: '1h' }
                    );
                    return res.status(200).json({
                        id: user._id,
                        token: token,
                    });
                }
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    });
});

router.post('/login', (req, res) => {
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
                });
            }
        })
        .catch((err) => {
            return res.status(401).json({
                message: 'Authentication failed',
            });
        });
});

module.exports = router;
