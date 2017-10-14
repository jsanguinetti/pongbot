
'use strict'

const _ = require('lodash')
const config = require('../config')
const stubbedRepos = require('../repos')
const IncomingWebhook = require('@slack/client').IncomingWebhook

const msgDefaults = {
  responseType: 'in_channel',
  username: 'Pongbot',
  iconEmoji: config('ICON_EMOJI')
}

const webhook = new IncomingWebhook(config('WEBHOOK_URL'), msgDefaults)

var attachments = stubbedRepos.map((repo) => {
  return {
    title: `${repo.owner}/${repo.title} `,
    title_link: repo.url,
    text: `_${repo.description}_\n${repo.language} • ${repo.star}`,
    mrkdwn_in: ['text', 'pretext']
  }
})

let msg = { attachments: attachments }

webhook.send(msg, (err, res) => {
  if (err) throw err

  console.log(`\n🚀  Pongbot report delivered 🚀`)
})
