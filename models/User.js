const mongoose = require('mongoose')

const requiredString = { required: true, type: String }

const userSchema = mongoose.Schema({
    username: requiredString,
    email: requiredString,
    password: requiredString,
    registered_date: requiredString,
    logins_amount: Number,
    login_dates: [ String ]
})

module.exports = mongoose.model('users', userSchema)