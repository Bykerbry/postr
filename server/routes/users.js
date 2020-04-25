const express = require('express')
const jwt = require('jsonwebtoken')
const router = new express.Router()
const User = require('../models/user')


router.post('/users', async (req,res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.send(user)
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
})

router.get('/users/login', async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) {
            throw new Error('Invaid email')
        }
        console.log(user)
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router