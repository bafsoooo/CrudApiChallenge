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
router.get('/:id', getCharecter);

// Delete a character by name
router.delete('/:id', deleteCharecter);

// Update a character by name (assuming the rest of the updateCharacter function is implemented)
router.patch('/:id', updateCharecter);

module.exports = router