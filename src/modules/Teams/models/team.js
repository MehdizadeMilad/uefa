'use strict'

module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        name: DataTypes.STRING,
        logo: DataTypes.STRING,
        points: DataTypes.INTEGER
    }, {});
    return Team;
};