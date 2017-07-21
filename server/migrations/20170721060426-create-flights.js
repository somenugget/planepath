'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('flights', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      from_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      to_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      creator_id: {
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departure: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('flights');
  }
};
