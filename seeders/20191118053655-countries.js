'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [
        {
          country_name: 'Afghanistan',
          createdAt: '2018-02-01 13:43:47.440 +00:00',
          updatedAt: '2018-02-01 13:43:47.440 +00:00'
        },
      {
        country_name: 'Albania',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'Algeria',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Andorra',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Angola',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Argentina',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Armenia',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Australia',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Austria',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Azerbaijan',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Bahamas',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Bahrain',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Belarus',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Belgium',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Bulgaria',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'Burundi',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Cambodia',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Canada',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      }
      ,
      {
        country_name: 'Chad',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'Chile',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'China',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'Colombia',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'Comoros',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'Croatia',
        createdAt: '2018-02-01 13:43:47.440 +00:00',
        updatedAt: '2018-02-01 13:43:47.440 +00:00'
      },
      {
        country_name: 'Denmark',
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
