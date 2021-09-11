const connection = require('../database');
const authResponseErrorMessages = require('../models/messages/Response/Error/authResponseErrorMessage');
const authResponseSuccessMessages = require('../models/messages/Response/Success/authResponseSuccessModel');
const authQuery = require('../queries/AuthQuery');
const isMailValid = require('../utils/validateMail');

module.exports = {
    async signIn(request, response) {
        const { email, password } = request.body;

        if (isMailValid(email)) {
           connection.all(authQuery.signIn, [email, password], (_, users) => {
               if (users.length === 0) 
                return response.status(400).json(authResponseErrorMessages.invalidCredentials);
            
               return response.status(201).json(authResponseSuccessMessages.signIn);
           })
        } else {
            return response.status(400).json(authResponseErrorMessages.signInInvalidMail);
        }
    }
}