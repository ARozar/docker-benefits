'use strict';

var convertToBase64 = function convertToBase64(inputString) {

    var buffer = Buffer.from(inputString);

    return buffer.toString('base64');
};

module.exports = convertToBase64;