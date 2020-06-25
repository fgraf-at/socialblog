const express = require('express');
const checkAuth = require('../middleware/check-auth')
const friendController = require('../controllers/friend');
const userController = require('../controllers/user');
const router = express.Router();


router.put('/saveFriend', checkAuth, friendController.saveFriend);
router.get('/getFriends', checkAuth, friendController.getFriendsFromUser);
router.get('/getUsersFromNickname', userController.getUserFromNickname);
module.exports = router;
