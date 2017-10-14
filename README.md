# 🏓 Pongbot

![Pongbot](https://www.imageupload.co.uk/images/2017/10/14/pongbot-icon.png)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Pongbot is largely based on the following post and code: ["How to Deploy Your Slack Bots to Heroku"](https://blog.heroku.com/archives/2016/3/9/how-to-deploy-your-slack-bots-to-heroku) blog post.


### Supported `/slash` commands

Create a `/pongbot` [custom slash command](https://api.slack.com/slash-commands), using the URL: `pongbotcds.herokuapp.com/commands/pongbot`. *Take note of the provided `token`, this is used to verify requests come from Slack.*

- `/pongbot` or `/pongbot help` - List available commands
- `/pongbot rank` - Show current ranking

### Install

```shell
$ npm install
```

### Copy `.env-example` to `.env`

```shell
$ cp .env-example .env
```

### Configure

```shell
SLACK_TEAM_TOKEN=xoxb...8WRqKWx
NODE_ENV=development
PORT=3000
```
### Run

```shell
$ npm start

🚀 Pongbot LIVES on PORT 3000 🚀
```

Visit [localhost:3000](http://localhost:3000).

### Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

_Or with the [Heroku Toolbelt](https://toolbelt.heroku.com)_

```shell
$ heroku create {optional-app-name}

Creating app... done, stack is cedar-14
https://blooming-scrubland-64464.herokuapp.com/

$ git push heroku master
...
remote: -----> Node.js app detected
...
remote:        https://blooming-scrubland-64464.herokuapp.com/ deployed to Heroku
...
To https://git.heroku.com/blooming-scrubland-64464.git
 * [new branch]      master -> master

$ heroku open
```

### License

**[This project is licensed under the terms of the MIT license.](http://license-me.herokuapp.com)**
 -- [_Need your own? There's a button for that :wink:_](https://github.com/mattcreager/license)
