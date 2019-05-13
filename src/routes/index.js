'use strict';

const express = require('express');
const routerRoot = express.Router();
const urls = require('../models/urls').getModel;
//const metas = require('../models/metas').getModel;

// Health check
routerRoot.get('/ping', function(req, res) {
  res.send('PONG');
});

// monsite.com/search?q=maRequerte =>  req.query.q;
// monsite.com/search/maRequerte =>  req.params.q;
routerRoot.get('/search', function(req, res) {
  const searchQuery = req.query.q;
  res.render('search_page', { results: searchQuery });
});
module.exports = routerRoot;
