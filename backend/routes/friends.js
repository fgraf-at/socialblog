const express = require('express');
const checkAuth = require('../middleware/check-auth')
const friendController = require('../controllers/friend');
const router = express.Router();


router.put('/saveFriend', checkAuth, friendController.saveFriend);
router.get('/getFriends', checkAuth, friendController.getFriendFromUser);

module.exports = router;
