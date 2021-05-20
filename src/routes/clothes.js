'use strict';

const express = require('express');
const router = express.Router();

const validator = require('../middleware/validator')

const Clothes = require('../models/clothes.js');
const clothes = new Clothes();

router.get('/', getClothes);
router.get('/:id', validator, getById);
router.post('/', createClothes);
router.put('/:id', validator, updateClothes);
router.delete('/:id', validator, deleteById);

function getClothes(req, res) {
    const obj = clothes.read();
    res.json(obj);
}

function getById(req, res) {
    const obj = clothes.read(req.params.id);
    res.json(obj);
}

function createClothes(req, res) {
    const clothesobj = req.body;
    const obj = clothes.creat(clothesobj);
    res.status(201).json(obj);
}

function updateClothes(req, res) {
    const clothesobj = req.body;
    const obj = clothes.update(req.params.id, clothesobj);
    res.json(obj);
}

function deleteById(req, res) {
    const obj = clothes.delete(req.params.id);
    res.json(obj);
}

module.exports = router;
