const User = require('../models/user-model')
const bcrypt = require('bcrypt')

loginClient = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await (await User.findOne( { email })).isSelected('+password')

        if(!user) {
            res.send("User does not exists")
        }

        const hashedPassword = await bcrypt.hash(req.body.password , 10)
        //user = { firstName: users.firstName , password: hashedPassword}
        //users.push(user)
        res.status(201).send()
        console.log('user', user)
    } catch {
        res.status(500).send()
    }
}

module.exports = {
    loginClient
}

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.name = req.body.name)
//     console.log('user', user)
//     if( user == null ) {
//         return res.status(400).send('Cannot find user!')
//     }
//     try {
//         if(await bcrypt.compare(req.body.password, user.password)) {
//             console.log('req.body.password', req.body.password)
//             res.send('Success')
//         } else {
//             res.send('Not auth')
//         }
//     } catch {
//         res.status(500).send("Not working")
//     }
// })