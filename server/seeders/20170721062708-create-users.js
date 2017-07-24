'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {username: 'user', password: '1', role: 'user', token: '123', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {username: 'org', password: '1', role: 'organisation', token: 'qwerty', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {username: 'admin', password: '1', role: 'admin', token: 'asd', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
