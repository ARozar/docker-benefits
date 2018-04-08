#!/usr/bin/env node
'use strict';

var _require = require('yargs'),
    argv = _require.argv,
    convert = require('./convert');

var string = argv.t || argv.text;

console.log(convert(string));