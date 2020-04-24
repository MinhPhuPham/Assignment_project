const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 8080;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    provider: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: "phamminhphueur@gmail.com", // Enter here email address from which you want to send emails
        pass: "nedxrwalbvbrzskx" // Enter here password for email account from which you want to send emails
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.use(express.static(__dirname + "/dist/Final"));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/send", function(req, res, next) {
    next();
});

app.post("/send", function(req, res) {
    let senderName = req.body.contactFormName;
    let senderEmail = req.body.contactFormEmail;
    let messageSubject = req.body.contactFormSubjects;
    let messageText = req.body.contactFormMessage;
    let copyToSender = req.body.contactFormCopy;

    let mailOptions = {
        to: senderEmail, // Enter here the email address on which you want to send emails from your customers

        subject: messageSubject,
        text: messageText,
        replyTo: senderEmail
    };

    if (senderName === "") {
        res.status(400);
        res.send({
            message: "Bad request"
        });
        return;
    }

    if (senderEmail === "") {
        res.status(400);
        res.send({
            message: "Bad request"
        });
        return;
    }

    if (messageSubject === "") {
        res.status(400);
        res.send({
            message: "Bad request"
        });
        return;
    }

    if (messageText === "") {
        res.status(400);
        res.send({
            message: "Bad request"
        });
        return;
    }

    if (copyToSender) {
        mailOptions.to.push(senderEmail);
    }

    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: ", response);
            res.end("sent");
        }
    });
});

app.get("*/", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/Final/index.html"));
});

app.listen(port, () => {
    console.log("you are listen to " + port);
});