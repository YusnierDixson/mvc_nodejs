'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


      return queryInterface.bulkInsert('tasks', [
        {id: 8, decription:'Grabar el curso', createdAt:new Date(), updatedAt:new Date()},
        {id: 9, decription:'Grabar el curso', createdAt:new Date(), updatedAt:new Date()},
        {id: 10, decription:'Grabar el curso', createdAt:new Date(), updatedAt:new Date()}
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('tasks', null, {});

  }
};
