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
    description_name: Sequelize.TEXT,
    description_prop: Sequelize.TEXT,
    site_name: Sequelize.STRING,
    image: Sequelize.STRING,
    twitter_description: Sequelize.TEXT,
    twitter_tittle: Sequelize.STRING,
    twitter_site: Sequelize.STRING,
    application_name: Sequelize.STRING,
    type: Sequelize.STRING
});


function createUrl(data) {
    URLS.create({
        url: data.url,
        title: data.title,
        locale: data.locale,
        locale_alt: data.locale_alt,
        description_name: data.description_name,
        description_prop: data.description_prop,
        site_name: data.site_name,
        image: data.image,
        twitter_description: data.twitter_description,
        twitter_tittle: data.twitter_tittle,
        twitter_site: data.twitter_site,
        application_name: data.application_name,
        type: data.type
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

async function searchSQL(keyWord){
    const Op = Sequelize.Op;
    const objectUrl = await URLS.findAll({
        attributes: ['url'],
        where: {
            [Op.or]:[
                {url: {[Op.like]: keyWord}},
                {title: {[Op.like]: keyWord}},
                {locale: {[Op.like]: keyWord}},
                {locale_alt: {[Op.like]: keyWord}},
                {description_name: {[Op.like]: keyWord}},
                {description_prop: {[Op.like]: keyWord}},
                {site_name: {[Op.like]: keyWord}},
                {image: {[Op.like]: keyWord}},
                {twitter_description: {[Op.like]: keyWord}},
                {twitter_tittle: {[Op.like]: keyWord}},
                {twitter_site: {[Op.like]: keyWord}},
                {application_name: {[Op.like]: keyWord}},
                {type: {[Op.like]: keyWord}}
            ]
        }
    });
    const urlFound = new Array();
    objectUrl.forEach(function(element) {urlFound.push(element.dataValues.url);});
    //console.log(urlFound);
    return urlFound;
}

module.exports = initUrl;
module.exports.getModel = URLS;
module.exports.getUrl = searchSQL;
module.exports.createUrl = createUrl;