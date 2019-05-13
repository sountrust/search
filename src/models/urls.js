'use strict';

const Sequelize = require('sequelize');
const db = require('./index');
const logger = require('../libs/logger');


// definition du modele urls
const URLS = db.define('urls ', {
    url: Sequelize.STRING,
    title: Sequelize.STRING,
    locale: Sequelize.STRING,
    locale_alt: Sequelize.STRING,
    description: Sequelize.STRING,
    site_name: Sequelize.STRING,
    image: Sequelize.STRING,
    twitter_description: Sequelize.STRING,
    twitter_tittle: Sequelize.STRING,
    twitter_site: Sequelize.STRING
});


function createUrl(data) {
    URLS.create({
        url: data.url,
        title: data.title,
        locale: data.locale,
        locale_alt: data.locale_alt,
        description: data.description,
        site_name: data.site_name,
        image: data.image,
        twitter_description: data.twitter_description,
        twitter_tittle: data.twitter_tittle,
        twitter_site: data.twitter_site
    }).then(function (res) {
        logger.debug('Nouveau lien ajoute', res);
    });
}


async function initUrl() {
    try {
        await URLS.sync();
    } catch (e) {
        logger.error(e);
    }
}


module.exports = initUrl;
module.exports.getModel = URLS;
module.exports.createUrl = createUrl;