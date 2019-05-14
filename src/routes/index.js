'use strict';

const express = require('express');
const routerRoot = express.Router();
const urls = require('../models/urls');
//const metas = require('../models/metas').getModel;

// Health check
routerRoot.get('/ping', function(req, res) {
  res.send('PONG');
});

// monsite.com/search?q=maRequette =>  req.query.q;
// monsite.com/search/maRequette =>  req.params.q;
routerRoot.get('/search', async function(req, res) {
  let keyW = "%"+req.query.keyWord+"%";
  console.log(keyW);
  const urlFound = await urls.getUrl(keyW);
  console.log(urlFound);
  res.render('search_page', { results: urlFound });
});


module.exports = routerRoot;
