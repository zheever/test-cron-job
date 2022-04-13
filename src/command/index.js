const MrNoty = require('./mr-noty');

class Command {
  handle(type, data) {
    switch(type):
      case 'mr-noty':
        const mrNoty = new MrNoty();
        mrNoty.handle(data);
        break;
  }
}

const command = new Command();
module.exports = command;
