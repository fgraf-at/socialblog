const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imagePath: { type: String, required: true },
    currentDate: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Post', postSchema);
