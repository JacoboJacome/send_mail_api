const express = require("express");
const cors = require('cors');

//Routers
const { email } = require("./routers/sendEmail.routers");

const app = express();

app.listen(3001, () => {
  console.log("server listen port 3001");
});

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", email);

// app.post(
//   "/api/v1/send_email",
//   catchAsync(async (req, res, next) => {
//     const { from, to, subject, text } = req.body;
//     console.log(to);
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       post: 465,
//       secure: true,
//       auth: {
//         user: "jacobojacome@gmail.com",
//         pass: "ewrphfhripwzmmmk",
//       },
//     });

//     const mailOptions = {
//       from,
//       to,
//       subject,
//       text,
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         res.status(500).send(err.message);
//       } else {
//         console.log("email enviado");
//         res.status(200).json(req.body);
//       }
//     });
//   })
// );
