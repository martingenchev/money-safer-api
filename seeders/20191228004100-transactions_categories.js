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
        category_name: 'Housing',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        category_name: 'Utilities',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        category_name: 'Transportation',
        createdAt: '2019-02-01 13:43:47.440 +00:00',
        updatedAt: '2019-02-01 13:43:47.440 +00:00'
      },
      {
        category_name: 'Entertainment',
        createdAt: '2019-02-01 13:43:47.440 +00:00',
        updatedAt: '2019-02-01 13:43:47.440 +00:00'
      },
      {
        category_name: 'Other',
        createdAt: '2019-02-01 13:43:47.440 +00:00',
        updatedAt: '2019-02-01 13:43:47.440 +00:00'
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
