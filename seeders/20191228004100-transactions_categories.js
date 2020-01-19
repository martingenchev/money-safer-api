'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Transactions_categories', [
      {
        category_name: 'Salary',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        category_name: 'Rent',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        category_name: 'Savings',
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
