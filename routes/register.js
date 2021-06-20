const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', async (req, res) => {
    const { username, email, password } = req.body

    if(!username || !email || !password)
        return res.status(400).json({ success: false, error: 'Please fill all the input fields.' })

    const searchUser = await User.findOne({ username })

    if(searchUser != null) // User already exists at the database
        res.status(400).json({ success: false, error: 'This username already exists' })

    const newUser = {
        username,
        email,
        password,
        registered_date: new Date()
    }

    await User(newUser).save()

    res.status(200).json({ success: true, message: `User ${username} created successfully.` })

})

module.exports = router