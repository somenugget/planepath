module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('city', {
    title: DataTypes.STRING,
  });

  return City;
};
