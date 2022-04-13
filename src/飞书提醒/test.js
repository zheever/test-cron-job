const axios = require('axios');

module.exports = () => {
  return axios.post(
    "https://open.feishu.cn/open-apis/bot/v2/hook/cefcc180-eff8-4b06-905b-a803ce09f4cf",
    {"msg_type":"text","content":{"text":"request example"}},
    {
      headers: {
       "content-type": "application/json"
      }
    }
  );
}
