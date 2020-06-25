const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nickname: {
    type: String,
    unique: true,
    required: [true, 'Nickname is required']
  },

  email: { type: String,
    unique: true,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],

  },
});
userSchema.plugin(uniqueValidator, { message: '{VALUE} is already used.'});
module.exports = mongoose.model("User", userSchema);
