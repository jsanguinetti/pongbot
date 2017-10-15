
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

const webhook = new IncomingWebhook(config('WEBHOOK_URL'), msgDefaults)

let content = tableMaker.create(stubbedRank)

let msg = { attachments: [{text: content}] }

webhook.send(msg, (err, res) => {
  if (err) throw err

  console.log(`\n🚀  Pongbot report delivered 🚀`)
})
