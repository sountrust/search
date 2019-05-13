'use strict';

const express = require('express');
const routerRoot = express.Router();
const urls = require('../models/urls').getModel;
//const metas = require('../models/metas').getModel;

// Health check
routerRoot.get('/ping', function(req, res) {
  res.send('PONG');
});

module.exports = routerRoot;
