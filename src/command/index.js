const MrNoty = require('./mr-noty');
const Debug = require("./debug");
const SentryNoty = require("./sentry-noty");

class Command {
  handle(type, data) {
    switch(type) {
      case 'mr-noty': {
        const mrNoty = new MrNoty();
        mrNoty.handle(data);
        break;
      }
      case 'sentry-noty': {
        const sentryNoty = new SentryNoty();
        sentryNoty.handle(data);
        break;
      }
      case 'debug': {
        const debug = new Debug();
        debug.handle(data);
        break;
      }
    }
  }
}

const command = new Command();
module.exports = command;
