#!/usr/bin/env node
'use strict'
const meow = require('meow');

const cli = meow(`
  Usage:
    check-question <question no double quotes needed>
    -v/--version    Print version
    -h/--help       Print help
  `, {
    alias: {
      v: 'version',
      h: 'help'
    },
    string: ['_']
});

const string = cli.input.join(' ');

// throw error is string is empty and exit
if (string.length < 1) {
  console.error('An empty string is not allowed.')
  process.exit(1)
}

// should count all character and ignore white space
const characterCounter = (str) => {
  let array = str.trim().toLowerCase().split('');
  let result = {};
  array.forEach( chr => {
    if( chr !== ' ' && chr !== '' && chr !== '"' && chr !== "'")
      result[chr] = result[chr] + 1 || 1;
  })
  return result;
}
// excecute and log result
process.stdout.write( characterCounter(string) )

// frequency counter for testing
module.exports = { characterCounter };

// Kill process afte 2 seconds
setTimeout(function() {
  process.exit(1)
}, 2 * 1000)
