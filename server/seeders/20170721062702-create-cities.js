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
      {title: 'Minsk', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Ankara', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Tbilisi', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Tallinn', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Riga', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Vienna', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},  
      {title: 'Athens', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Bratislava', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Budapest', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Chisinau', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Lisbon', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Monaco', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Oslo', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Sarajevo', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Prague', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Rome', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Stockholm', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Vilnius', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
      {title: 'Belgrade', created_at: Sequelize.literal('NOW()'), updated_at: Sequelize.literal('NOW()')},
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cities', null, {});
  }
};
