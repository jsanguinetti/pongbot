
'use strict'

const express = require('express')
const proxy = require('express-http-proxy')
const bodyParser = require('body-parser')
const _ = require('lodash')
const config = require('./config')
const commands = require('./commands')
const helpCommand = require('./commands/help')

let bot = require('./bot')

let app = express()

if (config('PROXY_URI')) {
  app.use(proxy(config('PROXY_URI'), {
    forwardPath: (req, res) => { return require('url').parse(req.url).path }
  }))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => { res.send('\n 👋 🌍 \n') })

app.post('/commands/pongbot', (req, res) => {
  let payload = req.body
  if (!payload || payload.token !== config('PONGBOT_COMMAND_TOKEN')) {
    let err = '✋  Pong—what? An invalid slash token was provided\n' +
              '   Is your Slack slash token correctly configured?'
    console.log(err)
    res.status(401).end(err)
    return
  }

  let cmd = _.find(commands, (cmd) => {
    return payload.text.match(cmd.pattern)
  }) || helpCommand

  cmd.handler(payload, res)
})

app.listen(config('PORT'), (err) => {
  if (err) throw err

  console.log(`\n🚀  Pongbot LIVES on PORT ${config('PORT')} 🚀`)

  if (config('SLACK_TOKEN')) {
    console.log(`🤖  beep boop: @pongbot is real-time\n`)
    bot.start()
  }
})
