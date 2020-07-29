'use strict'

module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    home: DataTypes.INTEGER,
    away: DataTypes.INTEGER,
    at: DataTypes.DATE,
  }, {});
  // Match.associate = function (models) {
  //   Match.hasMany(models.Team)
  // };
  return Match;
};