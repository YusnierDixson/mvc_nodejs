'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('task1s','userId',{
      type:Sequelize.INTEGER,references:{
        model:{tableName:'Users'},
        key:'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('task1s','userId');
  }
};
