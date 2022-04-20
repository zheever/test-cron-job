const axios = require('axios');

/**
 * 飞书提醒
 *
 * @example
 * return axios.post(
 *    "https://open.feishu.cn/open-apis/bot/v2/hook/cefcc180-eff8-4b06-905b-a803ce09f4cf",
 *    {"msg_type":"text","content":{"text":"request example"}},
 *    {
 *      headers: {
 *        "content-type": "application/json"
 *      }
 *    }
 * );
 * @param url
 * @param messageType
 * @param content
 * @param formatter
 * @returns {*}
 */
const notyFeishu = ({
                      url,
                      messageType,
                      content,
                      contentFormatter
                    }) => {
  return axios.post(
    url,
    {"msg_type": messageType, "content": {text: contentFormatter ? contentFormatter(content) : content}},
    {
      headers: {
        "content-type": "application/json"
      }
    }
  )
    .then(res => {
      console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
      return err;
    });
};

module.exports = notyFeishu;
