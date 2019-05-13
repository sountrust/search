/*'use strict';

const Sequelize = require('sequelize');
const logger = require('../libs/logger');
const db = require('./index');
const urls = require('./urls');

// definition modele of metas

const METAS = db.define('metas ', {
    name: Sequelize.STRING,
    property: Sequelize.STRING,
    content: Sequelize.STRING
});

const urlModel = urls.getModel;
METAS.belongsTo(urlModel, {onDelete: 'CASCADE'});


function storeMetas(data) {
    // insert metas into
    METAS.create({
        name: data.name,
        property: data.property,
        content: data.content
    }).then(function (res) {
        logger.debug('Nouvelles donnees metas ajoutees', res);
    });
}

async function initMeta() {
    try {
        await METAS.sync();
    } catch (e) {
        logger.error(e);
    }
}

module.exports = initMeta;
module.exports.getModel = METAS;
module.exports.storeMetas = storeMetas;*/
