const fs        = require("fs");
const path      = require("path");
const Sequelize = require('sequelize');
const string    = require('../helpers/string');
const sequelize = new Sequelize('planepath', 'dmitriy', '1', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

const models = {};

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    models[string.capitalize(model.name)] = model;
  });

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
