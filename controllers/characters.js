const express = require('express');
const app = express();
const { createCustomError } = require('../errors/custom-error')
const Character = require('../db/models/character')


const getAllCharecters = async (req, res) => {
    const characters = await Character.find({});
    res.status(200).json({ characters });
}

const createCharecter = async (req, res) => {
    const { name, kind } = req.body;
  
    if (!name || !kind) {
      return res.status(400).json({ msg: 'Please provide name and kind' });
    }
  
    await Character.create({ name, kind });
    res.status(201).json({ msg: 'Character created successfully' });
  }

const getCharecter =  async (req, res, next) => {
    const { name } = req.params;
    const character = await Character.findOne({ name });
    if (!character) {
      return next(createCustomError(`No character with name: ${name}`, 404));
    }
  
    res.status(200).json({ character });
  }
const deleteCharecter = async (req, res, next) => {
  const { name: nameChar } = req.params
  const character = await Character.findOneAndDelete({ name: nameChar })
  if (!character) {
    return next(createCustomError(`No character with name : ${nameChar}`, 404))
  }
  res.status(200).json({ task })
}
const updateCharecter = async (req, res, next) => {
  const { name: nameChar } = req.params

  const character = await Character.findOneAndUpdate({ name: nameChar }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!character) {
    return next(createCustomError(`No character with name : ${nameChar}`, 404))
  }

  res.status(200).json({nameChar})
}

module.exports = {
    getAllCharecters,
    createCharecter,
    getCharecter,
    updateCharecter,
    deleteCharecter,
}