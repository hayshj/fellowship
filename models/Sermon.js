const mongoose = require('mongoose');

const SermonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true
    },
    scripture: {
        type: String
    },
    speaker: {
        type: String
    },
    videoLink: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
  
module.exports = mongoose.model('Sermon', SermonSchema);