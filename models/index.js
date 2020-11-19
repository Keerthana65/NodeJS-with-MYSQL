'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Child Id as a Foreign Key for Admit Clinic
db.childDetails.hasMany(db.admitClinicDetails);
db.admitClinicDetails.belongsTo(db.childDetails);

// Child Id as a Foreign Key for General Conditions
db.childDetails.hasMany(db.generalConditions);
db.generalConditions.belongsTo(db.childDetails);

// Admit Clinic Id as a Foreign Key for General Conditions
db.admitClinicDetails.hasMany(db.generalConditions);
db.generalConditions.belongsTo(db.admitClinicDetails);

// Child Id as a Foreign Key for Past Presenting Complaints
db.childDetails.hasMany(db.pastPresentingComplaints);
db.pastPresentingComplaints.belongsTo(db.childDetails);

// Admit Clinic Id as a Foreign Key for Past Presenting Complaints
db.admitClinicDetails.hasMany(db.pastPresentingComplaints);
db.pastPresentingComplaints.belongsTo(db.admitClinicDetails);

module.exports = db;
