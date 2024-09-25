const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  secure: false, // No SSL
});

let mailOptions = {
  from: 'admin@example.com',
  to: 'user@example.com',
  subject: 'Correo de prueba',
  text: 'Este es un correo de prueba para SMTP local',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Correo enviado: %s', info.messageId);
});
