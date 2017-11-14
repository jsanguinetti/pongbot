const tableMaker = require('string-table')
const { Ranking } = require('../models')
const parseXlsx = require('excel');
let cachedRanking = ''

function _preformat (str) {
  return '```' + str + '```'
}

function _parseRanking(resolve, reject) {
  let rankings = []
  parseXlsx('Campeonato_2017.xlsx', function(err, data) {
    if (err) return reject(err)
    let nameC = 0
    let ptsC = 0
    let pdsC = 0
    let setsC = 0

    for (var i = 0; i < data[0].length; i++) {
      var element = data[0][i];
      if (element === "Nombre") {
        nameC = i
      } else if (element === "Pts") {
        ptsC = i
      } else if (element === "Pds") {
        pdsC = i
      } else if (element === "Sets") {
        setsC = i
      }
    }

    for (var j = 0; j < 51; j++) {
      let row = data[j]
      const name = row[nameC]
      const points = row[ptsC]
      const matches = row[pdsC]
      const sets = row[setsC]
      rankings.push({
        name: name,
        points: points,
        matches: matches,
        sets: sets
      })
    }
    console.log(JSON.stringify(rankings))
    cachedRanking = _preformat(tableMaker.create(rankings)) 
    return resolve(cachedRanking)
  })
}

const getCurrentRanking = async () => {
  if (cachedRanking !== '')
    return new Promise((resolve, _) => resolve(cachedRanking))
  else
    return new Promise(_parseRanking)
}

module.exports = {
  getCurrentRanking
}
