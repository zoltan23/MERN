import React, { useState } from 'react'

export default function ReusableInputField(props) {

    const [input, setInput] = useState('')
    const [isInputValid, setIsInputValid] = useState(null)

    const getInput = (e) => {

        if (e.target.value.length > 0) {
            props.onUpdateInput(e.target.value)
            console.log('reusable object', e.target.value)
            setInput(e.target.value)
            setIsInputValid(true)

        } else if (e.target.value.length == 0) {
            
            setInput(e.target.value)
            setIsInputValid(false)

        }
    }

    const getValidString = (stateBool) => {
        if (stateBool === null)
            return "form-control"
        return stateBool ? "form-control is-valid" : "form-control is-invalid"
    }

    return (
        <div>
            <label for={props.for}>{props.label}</label>
            <input type={props.text} className={getValidString(isInputValid)} placeholder={props.placeholder} onChange={getInput} />
            <div className="invalid-feedback">
                Please provide a valid {props.label.toLowerCase()}.
            </div>
        </div>
    )
}
