
'use strict'

const _ = require('lodash')
const config = require('../config')
const stubbedRank = require('../atp')
const IncomingWebhook = require('@slack/client').IncomingWebhook

const msgDefaults = {
  responseType: 'in_channel',
  username: 'Pongbot',
  iconEmoji: config('ICON_EMOJI')
}

function preformat(str) {
  return '```' + str + '```'
}

const webhook = new IncomingWebhook(config('WEBHOOK_URL'), msgDefaults)

let content = tableMaker.create(stubbedRank)

let msg = _.defaults({
  channel: payload.channel_name,
  text: preformat(content),
  mrkdwn: true
}, msgDefaults)

webhook.send(msg, (err, res) => {
  if (err) throw err

  console.log(`\n🚀  Pongbot report delivered 🚀`)
})
