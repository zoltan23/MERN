import React, { useContext, useState } from 'react'
import './Login.css'
import { UserContext } from '../../services/UserContext'
import ReusableInputField from '../reusable-components/ReusableInputField'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'

export default function Login() {

    const { setIsLoggedIn } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getEmail = (input) => {
        setEmail(input)
        console.log('email', email)
    }

    const getPassword = (input) => {
        setPassword(input)
    }

    const handleSignIn = () => {
        setIsLoggedIn(true)
    }

    return (
        <div className="card col-7 mx-auto">
            <div className="card-body ">
                <form className="mx-auto">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-6">
                                <div class="">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
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
    )
}
