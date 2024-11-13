const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Folder = sequelize.define('Folder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'folders', // Pastikan nama tabel sesuai
  timestamps: false,    // Jika tidak menggunakan createdAt/updatedAt
});

module.exports = Folder;
