//controllers for the router functions logic
const express = require('express');
const { createCustomError } = require('../errors/custom-error')
const Character = require('../db/models/character')
const {charsSchema} = require('../middleware/validation')

const getAllCharecters = async (req, res) => {
    //a simple pagination for retrieving lists of game characters
    const page = req.query.p || 0
    const charactersPerPage = 5;
    let characters = await Character
        .find({})
        .skip(page * charactersPerPage)
        .limit(charactersPerPage);
    res.status(200).json({ characters });

}

const createCharecter = async (req, res) => {
    const { name, kind } = req.body;
    try {
        const character = await Character.create({ name, kind });
        if (!name || !kind) {
            return res.status(400).json({ msg: 'Please provide name and kind' });
        }
        res.status(200).json({ character });
    }catch(error){
        next(error)
    }
}

const getCharecter = async (req, res, next) => {
    let { id: characterID } = req.params;
    // Remove any leading colons (:) from the characterID
    characterID = characterID.startsWith(':') ? characterID.substring(1) : characterID;
    try {
        const character = await Character.findOne({ _id: characterID });
        if (!character) {
            return next(createCustomError(`No character with id : ${characterID}`, 404));
        }
        res.status(200).json({ character });
    } catch (error) {
        next(error);
    }
};

const deleteCharecter = async (req, res, next) => {
    let { id: characterID } = req.params;
    characterID = characterID.startsWith(':') ? characterID.substring(1) : characterID;
    try {
        if (!character) {
        const character = await Character.findOneAndDelete({ _id: characterID })
        return next(createCustomError(`No character with id : ${characterID}`, 404))
    }
    res.status(200).json({ character })
    } catch(error){
    next(error)
    }
}
const updateCharecter = async (req, res, next) => {
    let { id: characterID } = req.params;
    characterID = characterID.startsWith(':') ? characterID.substring(1) : characterID;
    try{
        const character = await Character.findOneAndUpdate({ _id: characterID }, req.body, {
            //validation of the body of the request for patch method
            new: true,
            runValidators: true,
        })
    
        if (!character) {
        return next(createCustomError(`No character with id : ${characterID }`, 404))
        }
    
        res.status(200).json({character})
    }catch(error){
        next(error)
    }    
}

module.exports = {
    getAllCharecters,
    createCharecter,
    getCharecter,
    updateCharecter,
    deleteCharecter,
}