import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../services/UserContext'
import api from '../../../api/index.js'
import ReusableInputField from '../reusable-components/ReusableInputField';

export default function Settings() {

    const { userData, setUser } = useContext(UserContext)

    const { _id, firstName, lastName, email } = userData
    
    const [ errMsg, setErrMsg ] = useState('')
    const [ isDisabled, setIsDisabled ] = useState(true)

    useEffect(() => {
        console.log('[useEffect] userData', userData)
        const isUser = Object.values(userData).every(el => Boolean(el))
        isUser ? setIsDisabled(false) : setIsDisabled(true)
    }, [userData])

    function handleOnChange(input, name) {
        setUser(prevState => ({ ...prevState, [name]: input }))
    }

    const handleUpdateUser = async (e) => {
        e.preventDefault()
        const payload = { firstName, lastName, email }
        await api.updateUser(_id, payload).then(res => {
            console.log('res', res.data)
        }).catch(err => {
            console.log('err', err)
        })
    }

    return (
        <div className="container">
            <div className="card">
                <form className="card-body">
                    <div className="form-group ">
                        <div className="row">
                            <div className="col-6">
                                <ReusableInputField label="First Name" id="firstName" name="firstName" type="text" placeholder="First Name" value={firstName} onUpdateInput={handleOnChange} />
                            </div>
                            <div className="col-6">
                                <ReusableInputField label="last Name" id="lastName" name="lastName" type="text" placeholder="First Name" value={lastName} onUpdateInput={handleOnChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <ReusableInputField label="Email" id="exampleInputEmail1" name="email" type="email" placeholder="Enter email" value={email} onUpdateInput={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <ReusableInputField label="Password" type="password" name="password" placeholder="password" onUpdateInput={handleOnChange} />
                    </div>
                    <div class="form-group">
                        <ReusableInputField label="Confirm Password" type="password" name="confirmPassword" placeholder="password" onUpdateInput={handleOnChange} />
                    </div>
                    <button type="submit" class="btn btn-primary" disabled={true} onClick={handleUpdateUser}>Submit</button>
                </form>
            </div>
        </div>
    )
}
