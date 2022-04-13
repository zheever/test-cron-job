const notyFeishu = require('../utils/noty-feishu');

class Debug {
  handle(data) {
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        data = null;
      }
    }
    if (!data) {
      return;
    }
    return notyFeishu({
      url: data.url,
      messageType: 'text',
      content: data.content
    });
  };
}

module.exports = Debug;
