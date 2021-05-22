'use strict';

const express = require('express');
const router = express.Router();

const Food = require('../models/food.js');
const food = new Food();

router.get('/', getFood);
router.get('/:id', getById);
router.post('/', creatFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteById);

function getFood(req, res) {
    const obj = food.read();
    res.json(obj);
}

function getById(req, res) {
    const obj = food.read(req.params.id);
    res.json(obj);
}

function creatFood(req, res) {
    const foodobj = req.body;
    const obj = food.creat(foodobj);
    res.status(201).json(obj);
}

function updateFood(req, res) {
    const foodobj = req.body;
    const obj = food.update(req.params.id, foodobj);
    res.json(obj);
}

function deleteById(req, res) {
    const obj = food.delete(req.params.id);
    res.json(obj);
}

module.exports = router;
