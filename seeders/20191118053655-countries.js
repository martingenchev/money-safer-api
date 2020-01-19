'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [
        {
          country_name: 'John Doe',
          createdAt: '2018-02-01 13:43:47.440 +00:00',
          updatedAt: '2018-02-01 13:43:47.440 +00:00'
        },
      {
        country_name: 'Jamaica',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'Netherlands',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
