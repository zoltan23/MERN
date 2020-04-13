import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className="container-li">
            <div className="card-li centered">
                <input className="input-li" type="email" placeholder="Email Address" />
                <input className="input-li" type="password" placeholder="Password (at least 6 characters)" />
                <div className="form-bottom-li">
                    <button className="button-li">Login</button>
                    <label>
                        <input type="checkbox" value="yes" />Remember me
                </label>
                    <a href="#">Forgot your password?</a>
                </div>
            </div>
        </div>
    )
}
