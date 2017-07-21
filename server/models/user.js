module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    token: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Flight);
  };

  return User;
};
