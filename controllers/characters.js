const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const Character = require('../db/models/character')


const getAllCharecters = asyncWrapper(async (req, res) => {
  const characters = await Character.find({})
  res.status(200).json({ characters })
})

const createCharecter = asyncWrapper(async (req, res) => {
  const character = await Character.create(req.body)
  res.status(201).json({ character })
})

const getCharecter = asyncWrapper(async (req, res, next) => {
  const { name: nameChar } = req.params
  const character = await Character.findOne({ name: nameChar })
  if (!character) {
    return next(createCustomError(`No character with name : ${nameChar}`, 404))
  }

  res.status(200).json({ character })
})
const deleteCharecter = asyncWrapper(async (req, res, next) => {
  const { name: nameChar } = req.params
  const character = await Character.findOneAndDelete({ name: nameChar })
  if (!character) {
    return next(createCustomError(`No character with name : ${nameChar}`, 404))
  }
  res.status(200).json({ task })
})
const updateCharecter = asyncWrapper(async (req, res, next) => {
  const { name: nameChar } = req.params

  const character = await Character.findOneAndUpdate({ name: nameChar }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!character) {
    return next(createCustomError(`No character with name : ${nameChar}`, 404))
  }

  res.status(200).json({ task })
})

module.exports = {
    getAllCharecters,
    createCharecter,
    getCharecter,
    updateCharecter,
    deleteCharecter,
}