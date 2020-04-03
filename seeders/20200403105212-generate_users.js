'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {id: 9, email:'ydas@jut.cvf', passwordhash:'shdj',createdAt:new Date(), updatedAt:new Date()},
      {id: 10, email:'ydasw@jut.cvf', passwordhash:'shdj',createdAt:new Date(), updatedAt:new Date()},
      {id: 11, email:'ydaeds@jut.cvf', passwordhash:'shdj',createdAt:new Date(), updatedAt:new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});

  }
};
