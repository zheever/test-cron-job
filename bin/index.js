#!/usr/bin/env node
const run = require('../src');
const command = require('../src/command/index.js');
const mins = new Date().getMinutes();
const hours = new Date().getHours();

(() => {
  const args = process.argv.slice(2);
  if (args.length === 2) {
   const type = args[0];
   const data = args[1];
   command.handle(type, data);
   return;
  }
//   if (process.env.NODE_ENV === 'test') {
//     run({ shouldNotifyIfSuccess: true });
//     require('../src/预约疫苗预约')();
//     return;
//   }

//   if (mins % 9 === 0 /* 每 9 分钟执行一次 */) {
//     run({ shouldNotifyIfSuccess: hours % 12 === 0  && mins === 10 /* 每间隔 12 小时 10 分提醒一次 */ });
//     require('../src/预约疫苗预约')();
//     return;
//   }
//   require('../src/飞书提醒/test.js')();
})();
