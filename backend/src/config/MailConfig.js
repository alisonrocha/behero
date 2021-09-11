const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bb29ef00faec9d",
        pass: "c0ca11117fcdc0"
    }
});

module.exports = transporter;