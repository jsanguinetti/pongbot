
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Pongbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [{
  title: 'Pongbot will bring you CodigoDelSur table tennis latest ranking',
  color: '#2FA44F',
  text: '`/pongbot rank` returns current ranking :table_tennis_paddle_and_ball:',
  mrkdwn_in: ['text']
}, {
  title: 'Pongbot will bring you CodigoDelSur table tennis today\'s matches',
  color: '#FF2400',
  text: '`/pongbot partidos` returns today\'s matches :table_tennis_paddle_and_ball:',
  mrkdwn_in: ['text']
}, {
  title: 'Configuring Pongbot',
  color: '#E3E4E6',
  text: '`/pongbot help` ... you\'re lookin at it! \n',
  mrkdwn_in: ['text']
}]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
}

module.exports = { pattern: /help/ig, handler }
