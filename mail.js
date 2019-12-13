const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
        auth: {
            api_key: 'key-a5e8fa5aac2f9ad365b28a5fd776b0e7',
            domain: 'sandboxf4c76ced36bc4e4f8dbaf124f05d3860.mailgun.org'
        }
};

const transporter = nodemailer.createTransport(mailGun(auth));



const sendMail = (name, email, guest, event, message, cb) => {

    const mailOptions = {
        from: 'alecmabhizachirawu@outlook.com', 
        to: 'alecmabhizachirawu@gmail.com',
        name, email, guest, event, message
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            cb(err, null);
        }else {
            cb(null, data);
        }
    });
}


module.exports = sendMail;