const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', async (req, res) => {
    const { username, password } = req.body

    if(!username || !password)
        res.status(400).json({ success: false, message: 'Please fill all the input fields.' })

    const searchUser = await User.findOne({ username })

    if(!searchUser)
        return res.status(404).json({ success: false, message: `User ${username} not foound.` })

    await User.findOneAndUpdate(
        {
            username
        },
        {
            $inc: {
                logins_amount: 1
            },

            $push: {
                login_dates: new Date()
            }
        }
    )

    res.status(200).send(`Welcome, ${username}!`)
})

module.exports = router