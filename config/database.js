const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nama database
  process.env.DB_USER,     // User database
  process.env.DB_PASSWORD, // Password database
  {
    host: process.env.DB_HOST, // Host database
    dialect: 'mysql',          // Gunakan MySQL atau sesuai database Anda
  }
);

module.exports = sequelize;
