const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        required: true, 
        type: String,
    },
    kind: {
        required: true, 
        type: String,
    },
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;