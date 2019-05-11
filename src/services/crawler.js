'use strict';


const request = require('sync-request');
const cheerio = require('cheerio');
const logger = require('../libs/logger');

function getInfos(url) {
  logger.info('Parsing URL [%s]', url);
  const response = request('GET', url);
  const $ = cheerio.load(response.getBody());
  // TODO extraire les meta data et les stocker dans la base de donnee

  var parsedMeta = [];
  //Crawl every meta elements
  $('meta').each(function(){
    var a = $(this);
    //Retrieve name
    var name = a.attr('name');
    //Retrieve property
    var prop = a.attr('property');
    //Retrieve content
    var cont = a.attr('content');
    var metadata = {
      "name": name,
      "property": prop,
      "content": cont
    };
    // Push meta-data into parsedResults array
    parsedMeta.push(metadata);
  });
  console.log(parsedMeta);
}
module.exports.parseUrl=getInfos;
