const notyFeishu = require('../utils/noty-feishu');
const formatTime = require('../utils/format-time');

class SentryNoty {
  getCardConfig = (content) => {
    const body = content.body || {};
    const {project, id, event, level, url} = body || {};
    const {timestamp, title} = event || {};
    return {
      "config": {
        "wide_screen_mode": true
      },
      "elements": [
        {
          "fields": [
            {
              "is_short": true,
              "text": {
                "content": `**🕐 时间：**\n${timestamp ? formatTime(timestamp) : ""}`,
                "tag": "lark_md"
              }
            },
            {
              "is_short": true,
              "text": {
                "content": `**🔢 事件 ID：：**\n${id}`,
                "tag": "lark_md"
              }
            },
            {
              "is_short": false,
              "text": {
                "content": "",
                "tag": "lark_md"
              }
            },
            {
              "is_short": true,
              "text": {
                "content": `**📋 项目：**\n${project}`,
                "tag": "lark_md"
              }
            },
            {
              "is_short": true,
              "text": {
                "content": `**👤 级别：**\n${level}`,
                "tag": "lark_md"
              }
            },
            {
              "is_short": false,
              "text": {
                "content": "",
                "tag": "lark_md"
              }
            },
            {
              "is_short": true,
              "text": {
                "content": `**报错信息：**\n${title}`,
                "tag": "lark_md"
              }
            }
          ],
          "tag": "div"
        },
        {
          "tag": "hr"
        },
        {
          "tag": "div",
          "text": {
            "tag": "lark_md",
            "content": "前往Sentry查看详情。"
          },
          "extra": {
            "tag": "button",
            "text": {
              "tag": "lark_md",
              "content": "查看详情"
            },
            "type": "primary",
            "url": url
          }
        },
        {
          "tag": "div",
          "text": {
            "tag": "plain_text",
            "content": ""
          }
        }
      ],
      "header": {
        "template": "red",
        "title": {
          "content": "Sentry 报错提醒",
          "tag": "plain_text"
        }
      }
    }
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
      messageType: 'interactive',
      card: this.getCardConfig(data.content),
    });
  };
}

module.exports = SentryNoty;
