#!/usr/bin/env node
const run = require('../src');
const mins = new Date().getMinutes();
const hours = new Date().getHours();

(() => {
  if (process.env.NODE_ENV === 'test') {
    run({ shouldNotifyIfSuccess: true });
    return;
  }

  if (mins % 9 === 0 /* 每 9 分钟执行一次 */) {
    run({ shouldNotifyIfSuccess: hours % 1 === 0 /* && mins === 0  每间隔 1 小时 00 分提醒一次 */ })
    return;
  }
})();
