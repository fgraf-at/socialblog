const mongoose = require('mongoose');
const friendSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User',
    unique: true,
    required: true,
  }
});

module.exports = mongoose.model('Friend', friendSchema);
