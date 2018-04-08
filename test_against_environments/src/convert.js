const { Buffer } = require('safe-buffer');
const convertToBase64 = (inputString) => {
    
    const buffer =  Buffer.from(inputString);
    
    return buffer.toString('base64');
};

module.exports = convertToBase64;