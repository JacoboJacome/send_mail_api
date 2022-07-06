const { catchAsync } = require("../utils/catchAsync");
const dotenv = require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendEmail = catchAsync(async (req, res, next) => {
  const { from, to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    post: process.env.POST_EMAIL,
    secure: process.env.SECURE_EMAIL,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
    html: `<h1>Hola ${to} </h1>
      <p>${text}</p>
      <p>email enviado por: ${from}</p>
      `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      console.log("email enviado");
      res.status(200).json(req.body);
    }
  });
});
