const crypto = require('crypto');

const generatedHash = (data) => crypto.createHash('md5').update('some_string').digest('hex');

module.exports = generatedHash;