'use strict';


const request = require('sync-request');
const cheerio = require('cheerio');
const logger = require('../libs/logger');
const urls = require('../models/urls');
//const metas = require('../models/metas');

function getInfos(url) {
    logger.info('Parsing URL [%s]', url);
    const response = request('GET', url);
    const $ = cheerio.load(response.getBody());
    // TODO extraire les meta data et les stocker dans la base de donnee

    const parsedMeta = [];
    //Crawl every meta elements
    $('meta').each(function () {
        const a = $(this);
        //Retrieve name
        const name = a.attr('name');
        //Retrieve property
        const prop = a.attr('property');
        //Retrieve content
        const cont = a.attr('content');
        const metadata = {
            name: name,
            property: prop,
            content: cont
        };
        // Push meta-data into parsedResults array
        parsedMeta.push(metadata);
    });
    const data = {
        url: url,
        meta: parsedMeta
    };

    urls.createUrl(data);
    //metas.storeMetas(data);
    console.log(parsedMeta);
    return parsedMeta;
}

module.exports.parseUrl = getInfos;
