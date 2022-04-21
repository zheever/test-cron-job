const notyFeishu = require('../utils/noty-feishu');

class SentryNoty {
  contentFormatter = (content) => {
    const body = content.body || {};
    const {
      event,
      ...rest
    } = body;
    const {
      title,
      event_id,
      environment,
      platform,
      logger,
      type,
      metadata,
      timestamp,
      user,
      sdk,
      level,
      contexts,
      project,
      release,
      key_id
    } = event || {};
    return JSON.stringify({
      type: 'Sentry 报错',
      ...rest,
      event: {
        title,
        event_id,
        environment,
        platform,
        logger,
        type,
        metadata,
        timestamp,
        user,
        sdk,
        level,
        contexts,
        project,
        release,
        key_id,
      },
    }, null, 4)
  }

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
      content: data.content,
      contentFormatter: this.contentFormatter
    });
  };
}

module.exports = SentryNoty;
