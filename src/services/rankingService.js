const tableMaker = require('string-table')
const { Ranking } = require('../models')

function _preformat (str) {
  return '```' + str + '```'
}

const getCurrentRanking = async () => {
  const lastRankings = await Ranking.findAll({
    limit: 1,
    order: [['createdAt', 'DESC']]
  })
  return _preformat(tableMaker.create(lastRankings[0].table))
}

module.exports = {
  getCurrentRanking
}
