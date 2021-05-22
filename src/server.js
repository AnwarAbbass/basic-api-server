'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const clothesHandler = require('./routes/clothes');
const foodHandler = require('./routes/food');

const app = express();
const logger = require('../src/middleware/logger.js')

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(logger)


app.get('/', home);
app.use('/api/v1/clothes', clothesHandler);
app.use('/api/v1/food', foodHandler);

app.get('/bad', (req, res) => { throw new Error('something error'); });
app.use('*', notFoundHandler);
app.use(errorHandler);

function home(req, res) {
    res.send('you are in the home page');
}

function start(PORT) {
    app.listen(PORT, () => console.log(`you listen on port  ${PORT}`))
}

module.exports = {
    server: app,
    start: start
};