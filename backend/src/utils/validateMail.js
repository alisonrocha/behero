const validator = require('email-validator');

const isMailValid = (email) => validator.validate(email);

module.exports = isMailValid;