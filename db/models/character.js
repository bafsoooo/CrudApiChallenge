const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This makes the `name` field required
  },
  kind: {
    type: String,
    required: true, // This makes the `kind` field required
  },
  // other fields...
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;