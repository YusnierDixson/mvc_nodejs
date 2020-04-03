'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task1 = sequelize.define('Task1', {
    description: DataTypes.STRING
  }, {});
  Task1.associate = function(models) {
    // associations can be defined here
    Task1.belongsTo(models.User,{as:'user'});
  };
  return Task1;
};
