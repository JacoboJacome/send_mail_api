const express = require("express");
const cors = require('cors');

const dotenv = require("dotenv").config();

//Routers
const { email } = require("./routers/sendEmail.routers");

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("server listen port 3001");
});

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", email);