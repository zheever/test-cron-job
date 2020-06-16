const axios = require('axios');
const parser = require("@xfe-team/http-request-text-parser").default;
const cheerio = require('cheerio');

module.exports = () => {
  const result = parser(
    `GET http://api.golink.com/wx/once-card HTTP/1.1
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
host: api.golink.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36 QBCore/4.0.1301.400 QQBrowser/9.0.2524.400 Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2875.116 Safari/537.36 NetType/WIFI MicroMessenger/7.0.5 WindowsWechat
Referer: http://api.golink.com/wx/user
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.5;q=0.4
Cookie: advanced-frontend=4ub6lep3ufoclp0m5879asq669`
  );
  return axios[result.method.toLowerCase()](
    result.url,
    {
      headers: result.headers
    }
  ).then(response => {
    const content = response.data;
    console.log(response.data);
    if (content) {
      const $ = cheerio.load(response.data);
      return $('span[data-cdk]').parent().text().split(/\r?\n/).map((line) => line.trim()).join('\r\n');
    }
    throw new Error('无法正确获得 content, reason = ' + JSON.stringify(response));
  });
}
