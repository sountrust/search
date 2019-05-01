'use strict';

const Sequelize = require('sequelize');
const db = require('../services/db');
const logger = require('../libs/logger');

// definition du modele urls
const URLS = db.define('urls ', {
  url: Sequelize.STRING,
  title: Sequelize.STRING
});

URLS.sync().then(function(arg) {
  logger.info("synchro ok");
});

const creerPersonne = function(url, title) {
  return (new URLS(url, title));
}

function createUrl(data) {
  // inserer une personne en base
  URLS.create({
    url: data.url,
    title: data.title
  }).then(function(res) {
    logger.debug('Nouveau lien ajoute', res);
  });
};

module.exports = URLS;
module.exports.createUrl = createUrl;