const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require("path");
const nodemailer = require('nodemailer')
const User = require("../models/User")


const users = require('../data')

const getUsersFromDB = async () => User.find({})



router.get('/users', async function (req, res) {
    let users = await getUsersFromDB()
    res.send(users)
})


module.exports = router


const saveUser = function () {
    for (let user of users) {
        const newUser = new User(user)
        let save = newUser.save()
        save.then(console.log("saved"))
    }
}


// saveUser()



