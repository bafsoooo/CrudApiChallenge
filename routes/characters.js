const express = require('express')
const router = express.Router()

const {
  getAllCharecters,
  createCharecter,
  getCharecter,
  updateCharecter,
  deleteCharecter,
} = require('../controllers/characters')

// Get all characters
router.get('/characters', getAllCharecters);

// Create a new character
router.post('/characters', createCharecter);

// Get a single character by name
router.get('/characters/:name', getCharecter);

// Delete a character by name
router.delete('/characters/:name', deleteCharecter);

// Update a character by name (assuming the rest of the updateCharacter function is implemented)
router.patch('/characters/:name', updateCharecter);

module.exports = router