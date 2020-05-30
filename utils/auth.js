//const cookie = require('js-cookie')
const jwt = require('jsonwebtoken')


// export function handlelogin(token) {
//     cookie.set('token', token)
//     //Router.push('/account')
// }

module.exports = function (req, res, next) {
    const token =  req.header('token')
    console.log('[auth.js] token', token)
    if(!token) return res.status(401).send('Acces denied!!!!')
    
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified    
        next()    
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}
