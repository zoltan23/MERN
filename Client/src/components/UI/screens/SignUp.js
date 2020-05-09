import React, { useState } from 'react'
import api from '../../../api/index'
import './SignUp.css';
import ReusableInputField from './ReusableInputField';

export default function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const getFirstName = (input) => {
        setFirstName(input)
    }

    const getLastName = (input) => {
        setLastName(input)
    }
    
    const handleSignUp = async (e) => {
        e.preventDefault()
        const payload = { firstName, lastName }
        console.log('payload', payload)
        await api.createClient(payload).then(res => {
            console.log('res', res)
        }).catch(err => {
            console.log('err', err)
        })
    }

    return (
        <div className="card">
            <form className="card-body">
                <div className="form-group row">
                    <div className="col">
                        <ReusableInputField placeholder="First Name" onUpdateInput={getFirstName} />
                    </div>
                    <div className="col">
                        <ReusableInputField placeholder="Last Name" onUpdateInput={getLastName} />
                    </div>
                </div>              
                <button className="col-12" onClick={handleSignUp}>Sign Up!</button>
            </form>
        </div>
    )
}
