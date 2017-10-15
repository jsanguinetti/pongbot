'use strict'
const now = new Date()

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Rankings', [{
      table: JSON.stringify([{
        ' ': 1,
        name: 'R. Nadal',
        points: 9875
      }, {
        ' ': 2,
        name: 'R. Federer',
        points: 7505
      }, {
        ' ': 3,
        name: 'A. Murray',
        points: 6290
      }, {
        ' ': 4,
        name: 'A. Zverev',
        points: 4400
      }, {
        ' ': 5,
        name: 'M. Čilić',
        points: 4155
      }]),
      tableVersion: 1,
      createdAt: now,
      updatedAt: now
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Ranking', null, {})
  }
}
