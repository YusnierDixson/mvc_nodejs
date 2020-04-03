'use strict';
const bcrypt=require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    passwordhash: {
      type: DataTypes.STRING
      //allowNull: false
    },
    password: DataTypes.VIRTUAL
  }, {});
  User.login=function(email,password){
  //Buscar el usuario
  return User.findOne({
    where: {
      email:email
    }
  }).then(user=>{
    if(!user) return null;
    return user.authenticatePassword(password).then(valid=> valid ? user : null);
  });
  };

  User.prototype.authenticatePassword = function(password){
    return new Promise((res,rej)=>{
      bcrypt.compare(password,this.passwordhash,function(err,valid){
        if(err) return rej(err);//¿Existe algun error?
        res(valid);//true o false
      })
    })
  }

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task1,{as:'tasks'});
  };
  //Esto parece estar bien
User.beforeCreate(function(user,options){
    return new Promise((res,rej)=>{
      if(user.password){
        bcrypt.hash(user.password, 10, function(err,hash){
        user.passwordhash=hash;
        res();
        })
      };

    });

  });
  return User;
};
