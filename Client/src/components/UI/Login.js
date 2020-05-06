import React, { useContext } from 'react'
import './Login.css'
import { UserContext } from '../services/UserContext'

export default function Login() {

const { setIsLoggedIn } = useContext(UserContext)

const handleSignIn = () => {
setIsLoggedIn(true)
}

    return (
        <div className="container-li">
            <div className="card-li centered">
                <input className="input-li" type="email" placeholder="Email Address" />
                <input className="input-li" type="password" placeholder="Password (at least 6 characters)" />
                <div className="form-bottom-li">
                    <button className="button-li" onClick={handleSignIn}>Sign In</button>
                    <label>
                        <input type="checkbox" value="yes" />Remember me
                </label>
                    <a href="#">Forgot your password?</a>                  
                </div>
            </div>
        </div>
    )
}
