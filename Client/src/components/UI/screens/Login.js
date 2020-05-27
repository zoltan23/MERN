import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../services/UserContext'
import ReusableInputField from '../reusable-components/ReusableInputField'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'
import api from '../../../api/index.js'
import cookie from '../../../../node_modules/js-cookie/src/js.cookie'
import ErrorMessage from '../reusable-components/ErrorMessage'
import './Login.css'
import { Redirect } from 'react-router-dom'

export default function Login() {

    const { isAuth, setIsAuth, setUser } = useContext(UserContext)

    const [ errMsg, setErrMsg ] = useState('')
    const [ isDisabled, setIsDisabled ] = useState(true)

    const [ userInfo, setUserInfo ] = useState({
        email: "",
        password: "",
    })

    useEffect(() => {
        const isUser = Object.values(userInfo).every(el => Boolean(el))
        isUser  ? setIsDisabled(false) : setIsDisabled(true)
    }, [userInfo])

    function handleOnChange(input, name) {
        setUserInfo(prevState => ({ ...prevState, [name]: input }))
    }

    const handleSignIn = async (e) => {
       e.preventDefault()
       setIsAuth(true)
        const { email, password } = userInfo
        const payload = { email, password }
        try {
            const response = await api.loginUser(payload)
            cookie.set('token', response.data.token)
            setIsAuth(true) 
            setUser({...response.data.user})
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
                            <ReusableInputField label="Email Address" type="email" name="email" id="exampleInputEmail1" placeholder="Enter email" onUpdateInput={handleOnChange} />
                        </div>
                        <div className="form-group">
                            <ReusableInputField label="Password" type="password" name="password" id="exampleInputEmail1" placeholder="Enter email" onUpdateInput={handleOnChange} />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <button type="submit" className="btn btn-primary" disabled={isDisabled} onClick={handleSignIn}>Submit</button>
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
