
'use strict'

const _ = require('lodash')
const config = require('../config')
const { RankingService } = require('../services')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Pongbot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = async (payload, res) => {
  const currentRanking = await RankingService.getCurrentRanking()
  let msg = _.defaults({
    channel: payload.channel_name,
    text: currentRanking,
    mrkdwn: true
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
}

module.exports = { pattern: /rank/ig, handler }
