#!/usr/bin/env node
const command = require('../src/command/index.js');

(() => {
  const args = process.argv.slice(2);
  if (args.length === 2) {
   const type = args[0];
   const data = args[1];
   command.handle(type, data);
   return;
  }
})();
