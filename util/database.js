/*const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'admin',
    database: 'node-complete',
    password:'admin'
});
module.exports = pool.promise(); */

const Sequelize = require('sequelize');

const sequelize  = new Sequelize('node-complete','admin','admin',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
