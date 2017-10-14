
'use strict'

const _ = require('lodash')
const config = require('../config')
const Botkit = require('botkit')
const stubbedRepos = require('../repos')

var controller = Botkit.slackbot({})
var bot = controller.spawn()

bot.configureIncomingWebhook({ url: config('WEBHOOK_URL') })

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Starbot',
  icon_emoji: config('ICON_EMOJI')
}

var attachments = [].map((repo) => {
  return {
    title: `${repo.owner}/${repo.title} `,
    title_link: repo.url,
    text: `_${repo.description}_\n${repo.language} • ${repo.star}`,
    mrkdwn_in: ['text', 'pretext']
  }
})

let msg = _.defaults({ attachments: attachments }, msgDefaults)

bot.sendWebhook(msg, (err, res) => {
  if (err) throw err

  console.log(`\n🚀  Starbot report delivered 🚀`)
})
