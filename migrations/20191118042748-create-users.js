'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        isUnique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      first_name:{
        type: Sequelize.STRING,
      },
      last_name:{
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        isUnique: true
      },
      role:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      adress: {
        type: Sequelize.STRING
      },
      country_id:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull:false,
        references:{
          model: 'Countries',
          key: 'id',
          as: 'country_id'
        }
      },
      active:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};