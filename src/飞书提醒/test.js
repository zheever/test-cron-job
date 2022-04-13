const notyFeishu = require("../utils/noty-feishu");

module.exports = () => {
  return notyFeishu({
    url: "https://open.feishu.cn/open-apis/bot/v2/hook/cefcc180-eff8-4b06-905b-a803ce09f4cf",
    messageType: 'text',
    content: {"text": "request example 1"}
  });
}
module.exports();
