'use strict';

const express = require('express');
const router = require('router');

const validator = require('../src/middleware/validator.js')

const Food = require('../models/food.js');
const food = new Food();

router.get('/', get);
router.get('/:id', validator, getById);
router.post('/', creat);
router.put('/:id', validator, update);
router.delete('/:id', validator, deleteById);

function get(req, res) {
    const obj = food.read();
    res.json(obj);
}

function getById(req, res) {
    const obj = food.read(req.params.id);
    res.json(obj);
}

function creat(req, res) {
    const foodobj = req.body;
    const obj = food.creat(foodobj);
    res.status(201).json(obj);
}

function update(req, res) {
    const foodobj = req.body;
    const obj = food.update(req.params.id, foodobj);
    res.json(obj);
}

function deleteById(req, res) {
    const obj = food.delete(req.params.id);
    res.json(obj);
}

module.exports = router;
