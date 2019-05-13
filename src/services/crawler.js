'use strict';


const request = require('sync-request');
const cheerio = require('cheerio');
const logger = require('../libs/logger');
const urls = require('../models/urls');
//const metas = require('../models/metas');

function getInfos(dataUrl) {
    logger.info('Parsing URL [%s]', dataUrl);
    const response = request('GET', dataUrl);
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
    const url = searchContent(parsedMeta);
    const data = {
        url: url,
        title: data.title,
        locale: data.locale,
        locale_alt: data.locale_alt,
        description: data.description,
        site_name: data.site_name,
        image: data.image,
        twitter_description: data.twitter_description,
        twitter_tittle: data.twitter_tittle,
        twitter_site: data.twitter_site,
        application_name: data.application_name
    };

    //urls.createUrl(data);
    //metas.storeMetas(data);
    console.log(parsedMeta);
    return parsedMeta;
}

function searchContent(data){

}

module.exports.parseUrl = getInfos;
