import React, { useState } from 'react'
import api from '../../../api/index.js'
import './SignUp.css';
import ReusableInputField from '../reusable-components/ReusableInputField';
import cookie from 'js-cookie'
import ErrorMessage from '../reusable-components/ErrorMessage.js';

export default function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const getFirstName = (input) => {
        setFirstName(input)
        console.log('firstName', firstName)
        console.log('input', input)
    }

    const getLastName = (input) => {
        setLastName(input)
    }

    const getEmail = (input) => {
        setEmail(input)
        console.log('email', email)
    }

    const getPassword = (input) => {
        setPassword(input)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        console.log('handleSubmit clicked')
        const payload = { firstName, lastName, password, email }
        console.log('payload', payload)
        await api.signUpUser(payload).then(res => {
            cookie.set('token', res.data)
            console.log('res', res.data)
        }).catch(err => {
            console.log('err', err)
        })
    }

    return (
        <div>
            {errMsg ? <ErrorMessage errMsg={errMsg} /> : null}
            <div className="card">
                <form className="card-body">
                    <div className="form-group ">
                        <div className="row">
                            <div className="col-6">
                                <ReusableInputField label="First Name" id="firstName" type="text" placeholder="First Name" onUpdateInput={getFirstName} />
                            </div>
                            <div className="col-6">
                                <ReusableInputField label="Last Name" type="text" placeholder="Last Name" onUpdateInput={getLastName} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <ReusableInputField label="Email" type="email" id="exampleInputEmail1" placeholder="Enter email" onUpdateInput={getEmail} />
                    </div>
                    <div className="form-group">
                        <ReusableInputField label="Password" type="password" placeholder="password" onUpdateInput={getPassword} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword2">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleSignUp}>Submit</button>
                </form>
            </div>
        </div>
    )
}
