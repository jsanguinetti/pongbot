
'use strict'

const _ = require('lodash')
const config = require('../config')
const stubbedRepos = require('../repos')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Starbot',
  icon_emoji: config('ICON_EMOJI')
}

const handler = (payload, res) => {
  var attachments = stubbedRepos.map((repo) => {
    return {
      title: `${repo.owner}/${repo.title} `,
      title_link: repo.url,
      text: `_${repo.description}_\n${repo.language} • ${repo.star}>`,
      mrkdwn_in: ['text', 'pretext']
    }
  })

  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)
  console.log('msg in REPOS CMD', msg)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /repos/ig, handler: handler }
