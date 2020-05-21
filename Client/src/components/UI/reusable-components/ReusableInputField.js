import React, { useState } from 'react'

export default function ReusableInputField(props) {

    const [input, setInput] = useState('')
    const [isInputValid, setIsInputValid] = useState(null)

    const getInput = (e) => {
        if (e.target.value.length > 0) {
            props.onUpdateInput(e.target.value, props.name)
            //const { name, value } = e.target
            setInput(e.target.value)
            console.log('[Reusable] value', input)
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
            <input type={props.text} name={props.name}  className={getValidString(isInputValid)} placeholder={props.placeholder} onChange={getInput} />
            <div className="invalid-feedback">
                Please provide a valid {props.label.toLowerCase()}.
            </div>
        </div>
    )
}
