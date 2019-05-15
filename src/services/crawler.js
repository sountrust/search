'use strict';


const request = require('sync-request');
const cheerio = require('cheerio');
const logger = require('../libs/logger');
const urls = require('../models/urls');
//const metas = require('../models/metas');


//Organise list to match URLS format
function columnFormat(metadataList) {
    const result = {};
    for (let i = 0; i < metadataList.length; i++) {
        switch (metadataList[i].type) {
            case "description":
                result['description_name'] = metadataList[i].content;
                break;
            case "twitter:site":
                result['twitter_site'] = metadataList[i].content;
                break;
            case "twitter:title":
                result['twitter_title'] = metadataList[i].content;
                break;
            case "og:title":
                result["title"] = metadataList[i].content;
                break;
            case "og:locale:alternate":
                result['locale_alt'] = metadataList[i].content;
                break;
            case "twitter:description":
                result['twitter_description'] = metadataList[i].content;
                break;
            case "og:type":
                result['type'] = metadataList[i].content;
                break;
            case "og:url":
                result['url'] = metadataList[i].content;
                break;
            case "og:site_name":
                result['site_name'] = metadataList[i].content;
                break;
            case "og:image":
                result['image'] = metadataList[i].content;
                break;
            case "og:locale":
                result['locale'] = metadataList[i].content;
                break;
            case "og:description":
                result['description_prop'] = metadataList[i].content;
                break;
            case "application-name":
                result['application_name'] = metadataList[i].content;
                break;
            default:
                break;
        }
    }
    return result;
}

function filterItems(arr, query) {
    try {
        return arr.filter(function (el) {
            return el.indexOf(query) !== -1;
        })
    } catch
        (e) {
        logger.error(e);
    }
}

function getUrlsFromSite(hrefList) {
    const response = request('GET', hrefList);
    const $ = cheerio.load(response.getBody());

    //Crawl every anchor elements
    let list = [];
    $('a').each(function () {
        const l = $(this);
        const href = l.attr('href');
        list.push(href);
    })

    const hreflist = filterItems(list, 'https');
    return hreflist;
}

function getInfos(dataUrl) {
    try{
        logger.info('Parsing URL [%s]', dataUrl);
        const response = request('GET', dataUrl);
        if ((response.statusCode !== 404) && (response.statusCode !== 401)){
            const $ = cheerio.load(response.getBody());

            // TODO extraire les meta data et les stocker dans la base de donnee

            //Crawl every meta elements
            let metadataList = [];
            $('meta').each(function () {
                const a = $(this);
                //Retrieve property
                const prop = a.attr('property');
                //Retrieve content
                const cont = a.attr('content');
                //Retrieve name
                const name = a.attr('name');
                //choose from name and property the meta content
                if (prop && name) {
                    metadataList.push({type: name, content: cont})
                } else if (prop) {
                    metadataList.push({type: prop, content: cont})
                } else if (name) {
                    metadataList.push({type: name, content: cont})

                } else {
                    logger.error('no property or name');
                }
            })

            let metadata = columnFormat(metadataList);
            urls.createUrl(metadata);
            //metas.storeMetas(metadata);
            console.log(metadata);
        }else{
            logger.error("erreur 404");
        }



    }catch
        (e) {
        logger.error(e);
    }
}


module.exports.parseUrl = getInfos;
module.exports.gethref = getUrlsFromSite;

