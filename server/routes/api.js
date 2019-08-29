const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require("path");
const nodemailer = require('nodemailer')
const User = require("../models/User")


const getUsersFromDB = async () => User.find({})



router.get('/users', async function (req, res) {
    let users = await getUsersFromDB()
    res.send(users)
})

router.post('/sendMail', async function (req, res) {
    console.log(req.body)



    const htmlMail = `
    <h1>פרטי הלקוח </h1>
    <br>
    <br>
        <div>Name : ${req.body.name} ${req.body.surName} </div>
        <div>City : ${req.body.city}</div>
        <div>Phone : ${req.body.phone}</div>
        <br>
        <h3>בהצלחה!</h3>

        `

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'daganyy@gmail.com',
            pass: 'Apollonia24'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        to: "dagangm@gmail.com",
        subject: 'לקוח השאיר לך פרטים באתר נימפה!', // Subject line
        text: 'Hello world?', // plain text body
        html: htmlMail // html body
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);

    });

})


module.exports = router





