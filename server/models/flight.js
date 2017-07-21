module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('flight', {
    code: DataTypes.STRING,
    departure: DataTypes.TIME,
    duration: DataTypes.INTEGER,
    cost: DataTypes.INTEGER
  });

  Flight.associate = (models) => {
    Flight.belongsTo(models.City, {
      foreignKey: 'from_id',
    });

    Flight.belongsTo(models.City, {
      foreignKey: 'to_id',
    });

    Flight.belongsTo(models.User, {
      foreignKey: 'creator_id',
    });
  };

  return Flight;
};
