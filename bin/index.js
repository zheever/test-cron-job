#!/usr/bin/env node

const mins = new Date().getMinutes();
const hours = new Date().getHours();

if (mins % 9 === 0 /* 每 9 分钟执行一次 */) {
  const run = require('../src');
  run({ shouldNotifyIfSuccess: hours % 8 === 0 && mins === 0 /* 每间隔 8 小时 00 分提醒一次 */ })
}
