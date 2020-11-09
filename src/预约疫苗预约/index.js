const axios = require('axios');
const parser = require("@xfe-team/http-request-text-parser").default;

function notify(title, desp = '') {
  axios.get(`http://sc.ftqq.com/SCU124790Tb157c262e431021c91933bc92331e2945fa8ba9bd45a9.send?text=${encodeURIComponent(`14日疫苗预约${title}`)}&desp=${encodeURIComponent(desp)}`)
}

module.exports = ({ shouldNotifyIfSuccess = true } = {}) => {
  const result = parser(
    `POST https://wx.weisheng.com/hcn-web/*.jsonRequest HTTP/1.1
Host: wx.weisheng.com
Connection: keep-alive
Content-Length: 60
Origin: https://wx.weisheng.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36 QBCore/4.0.1301.400 QQBrowser/9.0.2524.400 Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2875.116 Safari/537.36 NetType/WIFI MicroMessenger/7.0.5 WindowsWechat
Content-Type: application/json;charset=UTF-8
Accept: application/json, text/plain, */*
X-Service-Method: getAllRegPlanList
X-Access-Token: d4ececc5-01b4-4a56-8e11-13bbf85c2f64
X-Service-Id: hcn.registration
Referer: https://wx.weisheng.com/wechat/wx_hcn-v2.html
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.5;q=0.4

["5bc2837d-6ca6-4322-87cf-ec3054f4397d","9494","2020-11-14"]`);
  axios.post(
    result.url,
    result.data,
    {
      headers: result.headers
    }
  ).then(async response => {
    const { afternoonCount, morningCount } = response.data.body[0];
    if (shouldNotifyIfSuccess) {
      if (Number(afternoonCount) > 0 || Number(morningCount) > 0)
        notify(`[上午: ${morningCount} 下午: ${afternoonCount} ]`, `${new Date()}\n 点击链接查阅: https://wx.weisheng.com/wechat/wx_hcn-v2.html#/doctor-select?orgid=5bc2837d-6ca6-4322-87cf-ec3054f4397d&deptid=9494`);
    }
  }).catch(error => {
    notify(new Date() + '\n' + JSON.stringify(error.message, null, 2));
  })
}
