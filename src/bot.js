
'use strict'

const RtmClient = require('@slack/client').RtmClient
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS
const RTM_EVENTS = require('@slack/client').RTM_EVENTS
const _ = require('lodash')
const config = require('./config')
const MemoryDataStore = require('@slack/client').MemoryDataStore;


let bot = new RtmClient(config('SLACK_BOT_TOKEN'), {
  logLevel: 'error',
  dataStore: new MemoryDataStore()
})

let channel

// The client will emit an RTM.AUTHENTICATED event on successful connection, with the `rtm.start` payload
bot.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  let generalChannel = _.find(rtmStartData.channels, (c) => (c.is_member && c.is_general))
  channel = generalChannel && generalChannel.id
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
})


// you need to wait for the client to fully connect before you can send messages
bot.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, () => {
  bot.sendMessage('Hello!', channel);
})

bot.on(RTM_EVENTS.MESSAGE, (message) => {
  console.log('message', message)
  console.log('USER', bot.dataStore.getUserById(message.user))
  bot.sendMessage('pong :table_tennis_paddle_and_ball:', message.channel);
})

module.exports = bot
