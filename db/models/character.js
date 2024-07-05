const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    kind : {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('character', characterSchema);