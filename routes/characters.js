const express = require('express')
const router = express.Router()

const {
  getAllCharecters,
  createCharecter,
  getCharecter,
  updateCharecter,
  deleteCharecter,
  editCharacter,
} = require('../controllers/tasks')

router.route('/').get(getAllCharecters).post(createCharecter)
router.route('/:name').get(getCharecter).patch(updateCharecter).delete(deleteCharecter)

module.exports = router