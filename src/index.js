const axios = require('axios');

function notifyEnterpriseRobot(message) {
  axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=24d3395a-9c3b-44b8-9866-9b3a913edbc9', {
    "msgtype": "text",
    "text": {
      "content": message
    }
  })
}

notifyEnterpriseRobot(`[${new Date()}]: 测试`);
