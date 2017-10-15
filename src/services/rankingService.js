const tableMaker = require('string-table')
const stubbedRank = require('../data').rank

function _preformat (str) {
  return '```' + str + '```'
}

function getCurrentRanking () {
  return _preformat(tableMaker.create(stubbedRank))
}

module.exports = {
  getCurrentRanking
}
