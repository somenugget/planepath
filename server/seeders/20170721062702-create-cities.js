'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cities', [
      {title: 'Odessa', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Kiev', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Lvov', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Kharkov', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Warshaw', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Moskow', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'St. Petersburg', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Berlin', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Paris', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Minsk', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cities', null, {});
  }
};
