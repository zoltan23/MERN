const User = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

loginClient = async (req, res) => {
    const { email, password } = req.body
    console.log('User', User)
    try {
        const user = await User.findOne( { email } ).select('+password')
        console.log('login: user', user)
        if(!user) {
            res.status(404).send("No user exists with that email!")
        } 

        const passwordMatch = await bcrypt.compare(password, user.password)

        if(passwordMatch) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
            res.header('token', token).json(token)
        } else {
            res.status(401).send("Incorrect password!")
        }

        const hashedPassword = await bcrypt.hash(req.body.password , 10)
    
    } catch {
        res.status(500).send("Error loggin in")
    }
}

module.exports = {
    loginClient
}