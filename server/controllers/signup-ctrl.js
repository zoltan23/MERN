const User = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, 
        { expiresIn: '7d' })
        res.status(201).json(token)
    } catch (error) {

    }
    console.log('email', email)
    res.status(200).send("Posted!!!")
} 

module.exports = {
    signUpUser
}
