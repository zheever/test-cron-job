const MrNoty = require('./mr-noty');
const Debug = require("./debug");

class Command {
  handle(type, data) {
    switch(type) {
      case 'mr-noty':
        const mrNoty = new MrNoty();
        mrNoty.handle(data);
        break;
      case 'debug':
        const debug = new Debug();
        debug.handle(data);
        break;
    }
  }
}

const command = new Command();
module.exports = command;
