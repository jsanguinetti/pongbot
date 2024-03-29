
'use strict'

const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') dotenv.load()

const config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PROXY_URI: process.env.PROXY_URI,
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  PONGBOT_COMMAND_TOKEN: process.env.PONGBOT_COMMAND_TOKEN,
  SLACK_TOKEN: process.env.SLACK_TOKEN,
  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN,
  ICON_EMOJI: ':table_tennis_paddle_and_ball:'
}

module.exports = (key) => {
  if (!key) return config

  return config[key]
}
