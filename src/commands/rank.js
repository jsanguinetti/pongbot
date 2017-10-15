
'use strict'

const _ = require('lodash')
const config = require('../config')
const tableMaker = require('string-table')
const stubbedRank = require('../atp')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Pongbot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
  let content = tableMaker.create(stubbedRank)

  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: [{text: content}]
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /rank/ig, handler: handler }
