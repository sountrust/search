const Sequelize = require('sequelize');
const logger = require('../libs/logger');
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'postgres',
        pool: {
            max: 15,
            min: 0,
            idle: 10000
        }
    },
);

/*async function connect() {
    try {
        await sequelize.authenticate();
        return sequelize;
    } catch (e) {
        logger.error(e);
    }
};*/


// http://docs.sequelizejs.com/manual/getting-started.html

module.exports = sequelize;
