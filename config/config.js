const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize =  process.env.JAWSDB_URL
    ? new Sequelize(process.env,JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        port: 3333,
        dialect: 'mysql',
        dialectOptions: {
            connectTimeout: 30000
        }

    });

module.exports = sequelize;