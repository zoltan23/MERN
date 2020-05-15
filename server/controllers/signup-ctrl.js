const User = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const env = require('../db/atlas_creds')

signUpUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if(user) {
            return res.status(422).send(`User exists with ${email}`)
        }
        
    const hash = await bcrypt.hash(password, 10)
    const newUser = await new User({
        firstName,
        lastName,
        email,
        password: hash
    }).save()
    console.log('newUser', newUser)
    const token = jwt.sign({ userId: newUser._id }, env.JWT_SECRET, 
        { expiresIn: '7d' })
        console.log('$$$$$token', token)
        res.status(201).json(token)
    } catch (error) {
        res.status(500).send("Did not sign up new user!")
    }
    console.log('email', email)
    //res.status(200).send("Signed In")
} 

module.exports = {
    signUpUser
}
