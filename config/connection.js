// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'm98o7!a6#t43a@2R23', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;