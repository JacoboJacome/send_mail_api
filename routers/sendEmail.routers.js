const express = require('express');

const { sendEmail } = require("../controllers/sendEmail.controllers")

const router = express.Router();

router.post("/sendEmail", sendEmail)

module.exports = { email : router };