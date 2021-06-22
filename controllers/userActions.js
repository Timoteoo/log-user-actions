const User = require('../models/User')

const loginController = async (req, res) => {
    const { username, password } = req.body

    if(!username || !password)
        res.status(400).json({ success: false, message: 'Please fill all the input fields.' })

    const userFound = await User.findOneAndUpdate(
        {
            username,
            password
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

    if(!userFound)
        return res.status(404).json({ success: false, message: `Wrong login credentials.` })
    
    res.status(200).json({ success: true, message: `Welcone, ${username}` })
}

const registerController = async (req, res) => {
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
}

module.exports = { loginController, registerController }