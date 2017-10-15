
'use strict'

const { RtmClient, CLIENT_EVENTS, RTM_EVENTS } = require('@slack/client')
const _ = require('lodash')
const config = require('./config')

// This is just an example of how we could use web API
// const WebClient = require('@slack/client').WebClient
// let web = new WebClient(config('SLACK_TOKEN'))
// web.users.profile.get('U7JDJGBEG').then((res) => user = res, console.log)

let bot = new RtmClient(config('SLACK_BOT_TOKEN'))

let generalChannelId

// The client will emit an RTM.AUTHENTICATED event on successful connection, with the `rtm.start` payload
bot.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  let generalChannel = _.find(rtmStartData.channels, (c) => (c.is_member && c.is_general))
  generalChannelId = generalChannel && generalChannel.id
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`)
})

// you need to wait for the client to fully connect before you can send messages
bot.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, () => {
  bot.sendMessage('Hello!', generalChannelId)
})

bot.on(RTM_EVENTS.MESSAGE, (message) => {
  if (message.subtype !== 'bot_message' &&
      message.text.indexOf('/pongbot') === -1 &&
      message.channel !== generalChannelId) {
    console.log('message', message)
    bot.sendMessage('pong :table_tennis_paddle_and_ball:', message.channel)
  }
})

module.exports = bot
