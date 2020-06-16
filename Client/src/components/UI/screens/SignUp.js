import React, { useState, useEffect } from 'react'
import api from '../../../api/index.js'
import ReusableInputField from '../reusable-components/ReusableInputField';
import cookie from '../../../../node_modules/js-cookie/src/js.cookie'
import ErrorMessage from '../reusable-components/ErrorMessage.js';
import Spinner from '../reusable-components/Spinner/Spinner.js';
import './SignUp.css';

export default function SignUp() {

    const [errMsg, setErrMsg] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        confirmPassword: ""
    })

    useEffect(() => {
        const isUser = Object.values(userInfo).every(el => Boolean(el))
        const { password, confirmPassword } = userInfo
        isUser && (password ===confirmPassword) ? setIsDisabled(false) : setIsDisabled(true)
    }, [userInfo])

    function handleOnChange(input, name) {
        setUserInfo(prevState => ({ ...prevState, [name]: input }))
        console.log('signup', userInfo)
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const { firstName, lastName, email, password } = userInfo
        const payload = { firstName, lastName, email, password }
        await api.signUpUser(payload).then(res => {
            cookie.set('token', res.data)
        }).catch(err => {
            console.log('err', err)
        })
        setIsLoading(false)
    }
  
    return (
        <div>
            <div>{isLoading ? <Spinner /> : ''}</div>
            {errMsg ? <ErrorMessage errMsg={errMsg} /> : null}
            <div className="card">
                <form className="card-body">
                    <div className="form-group ">
                        <div className="row">
                            <div className="col-6">
                                <ReusableInputField label="First Name" id="firstName" name="firstName" type="text" placeholder="First Name" onUpdateInput={handleOnChange} />
                            </div>
                            <div className="col-6">
                                <ReusableInputField label="last Name" id="lastName" name="lastName" type="text" placeholder="First Name" onUpdateInput={handleOnChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <ReusableInputField label="Email" id="exampleInputEmail1" name="email" type="email" placeholder="Enter email" onUpdateInput={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <ReusableInputField label="Password" type="password" name="password" placeholder="password" onUpdateInput={handleOnChange} />
                    </div>
                    <div class="form-group">
                        <ReusableInputField label="Confirm Password" type="password" name="confirmPassword" placeholder="password" onUpdateInput={handleOnChange} />
                    </div>
                    <button type="submit" class="btn btn-primary" disabled={isDisabled} onClick={handleSignUp}>Submit</button>
                </form>
            </div>
        </div>
    )
}
