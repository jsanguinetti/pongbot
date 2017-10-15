'use strict'
module.exports = (sequelize, DataTypes) => {
  const Ranking = sequelize.define('Ranking', {
    table: {
      type: DataTypes.TEXT,
      get () {
        const table = this.getDataValue('table')
        return JSON.parse(table)
      }
    },
    tableVersion: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  })
  return Ranking
}
