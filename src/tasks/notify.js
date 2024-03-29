
'use strict'

const _ = require('lodash')
const config = require('../config')
const IncomingWebhook = require('@slack/client').IncomingWebhook
const { RankingService } = require('../services')

const msgDefaults = {
  responseType: 'in_channel',
  username: 'Pongbot',
  iconEmoji: config('ICON_EMOJI')
}

const webhook = new IncomingWebhook(config('WEBHOOK_URL'), msgDefaults)

const currentRanking = RankingService.getCurrentRanking()

let msg = _.defaults({
  text: currentRanking,
  mrkdwn: true
}, msgDefaults)

webhook.send(msg, (err, res) => {
  if (err) throw err

  console.log(`\n🚀  Pongbot report delivered 🚀`)
})
