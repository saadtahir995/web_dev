const nodemailer = require('nodemailer');
const trans = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
        user: "saadtahir5665@gmail.com",
        pass: "swdx3WT7O0JHBKrR",
    },

});
module.exports = trans;