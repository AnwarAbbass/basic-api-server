'use strict';

require('dotenv').config;
const PORT = process.env.PORT || 3000
require('./src/server.js').start(PORT);