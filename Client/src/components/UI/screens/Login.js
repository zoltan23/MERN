import React, { useContext, useState } from 'react'
import './Login.css'
import { UserContext } from '../../services/UserContext'
import ReusableInputField from '../reusable-components/ReusableInputField'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
import api from '../../../api/index.js'
import { handleLogin } from '../../services/Auth'
import cookie from 'js-cookie'
import ErrorMessage from '../reusable-components/ErrorMessage'

export default function Login() {

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const getEmail = (input) => {
        setEmail(input)
    }

    const getPassword = (input) => {
        setPassword(input)
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        const payload = { email, password }
        try {
            const response = await api.loginUser(payload)
            setIsLoggedIn(true)
            cookie.set('token', response.data)
        } catch (error) {
            if (error.response) {
                console.error('error.response.data', error.response.data)
                setErrMsg(error.response.data)
            }
        } finally {

        }
    }

    return (
        <div className="container col-10 mt-3">
            {errMsg ? <ErrorMessage errMsg={errMsg}/> : null}
            <div className=" card mx-auto mt-5" >
                <div className="card-body">
                    <form className="mx-auto">
                        <div className="form-group bg-primary">
                            <h3>Login Form</h3>
                        </div>
                        <div className="form-group">
                            <ReusableInputField label="Email Address" type="email" id="exampleInputEmail1" placeholder="Enter email" onUpdateInput={getEmail} />
                        </div>
                        <div className="form-group">
                            <ReusableInputField label="Password" type="password" id="exampleInputEmail1" placeholder="Enter email" onUpdateInput={getPassword} />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <button type="submit" className="btn btn-primary" onClick={handleSignIn}>Submit</button>
                                </div>
                                <div className="col-6">
                                    <div className="">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <a href="#">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
