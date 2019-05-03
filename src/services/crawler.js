'use strict';


const request = require('sync-request');
const cheerio = require('cheerio');
const logger = require('../libs/logger');

function getInfos(url) {
  logger.info('Parsing URL [%s]', url);
  const response = request('GET', url);
  const $ = cheerio.load(response.getBody());
  // TODO extraire les meta data et les stocker dans la base de donnee

}
module.exports.parseUrl=getInfos
