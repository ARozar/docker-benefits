#!/usr/bin/env node
const { argv } = require('yargs'),
convert = require('./convert');

const string = argv.t || argv.text

console.log(convert(string));