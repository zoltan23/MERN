import React, { useState } from 'react'
import api from '../../../api/index'
import './SignUp.css';

export default function SignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const getFirstName = (e) => {
        console.log(e.target.value)
        setFirstName(e.target.value)
    }

    const getLastName = (e) => {
        console.log(e.target.value)
        setLastName(e.target.value)
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
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" onChange={getFirstName} />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" onChange={getLastName} />
                    </div>
                </div>
                <div>
                    <button onClick={handleSignUp}>Sign Up!</button>
                </div>
            </form>
        </div>
    )
}
