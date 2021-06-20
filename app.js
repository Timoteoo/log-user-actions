const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

// Routes
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')

// MiddleWares
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use('/register', registerRoute)
app.use('/login', loginRoute)

mongoose.connect(process.env.MONGODB_CONNECTION, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log('Connected to database');
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running...`);
})