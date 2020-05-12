import React, { useState } from 'react'

export default function ReusableInputField(props) {

    const [input, setInput] = useState('')
    const [isInputValid, setIsInputValid] = useState(null)

    const getInput = (e) => {
        if (e.target.value.length > 0) {
            setInput(e.target.value)
            props.onUpdateInput(input)
            setIsInputValid(true)
            console.log('input', input)
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
        </div>
    )
}
