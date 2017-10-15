const _ = require('lodash')
const stubbedMatches = require('../data').matches

function getTodaysMatches () {
  return _.reduce(
    stubbedMatches,
    (acc, m) => (acc + m.scheduledAt + ' -- ' + m.homeUser + ' :vs: ' + m.awayUser + '\n'),
    ''
  )
}

module.exports = {
  getTodaysMatches
}
