const notyFeishu = require('../utils/noty-feishu');

class MrNoty {
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

module.exports = MrNoty;
