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
router.get('/', getAllCharecters);

// Create a new character
router.post('/', createCharecter);

// Get a single character by name
router.get('/:name', getCharecter);

// Delete a character by name
router.delete('/:name', deleteCharecter);

// Update a character by name (assuming the rest of the updateCharacter function is implemented)
router.patch('/:name', updateCharecter);

module.exports = router