const transporter = require('../config/MailConfig');
const connection = require('../database');
const userResponseSuccessMessages = require('../models/messages/Response/Success/userResponseSuccessMessages');
const userQuery = require('../queries/UserQuery');
const createAccountSuccessTemplate = require('../templates/createAccountSuccessTemplate');
const generatedHash = require('../utils/generatedHash');
module.exports = {
    async create(request, response) {
        const { name, email, password } = request.body;

        try {
            const passwordHash = generatedHash(password);

            await connection.run(userQuery.createUser, [name, email, passwordHash]);

            await transporter.sendMail({
                from: 'contato.envolveme@gmail.com',
                to: 'contato.envolveme@gmail.com',
                subject: 'Conta criada com sucesso!',
                text: `Parabéns ${name} sua conta na 
                plataforma envolve.me foi criada com sucesso!`,
                html: createAccountSuccessTemplate(name),
            });

            return response.status(200).json(userResponseSuccessMessages.createUser);
        } catch (error) {
            return response.status(500).json({ 'message': error })
        }
    },

    async index(_, response) {
        try {
            await connection.all(userQuery.listUser, (_, users) => {
                return response.status(200).json(users);
            });
        } catch (error) {
            return response.status(500).json({ 'message': error })
        }

    },

    async update(request, response) {
        try {
            const { name, email, password } = request.body;

            await connection.run(userQuery.updateUser, [name, email, password, email]);

            return response.status(200).json(userResponseMessages.updateUser);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ 'message': error });
        }
    },

    async delete(request, response) {
        try {
            const { email } = request.body;

            await connection.run(userQuery.deleteUser, [email]);

            return response.status(200).json(userResponseMessages.deleteUser)
        } catch (error) {
            console.error(error);
            return response.status(500).json({ 'message': error });
        }
    },

    async reactivateUser(request, response) {
        try {
            const { email } = request.body;

            await connection.run(userQuery.reactivateUser, [email]);

            return response.status(200).json(userResponseMessages.reactivateUser)
        } catch (error) {
            console.error(error);
            return response.status(500).json({ 'message': error });
        }
    }
};