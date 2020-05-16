import React from 'react'

export default function ErrorMessage(props) {
    return (
        <div className="alert alert-danger" role="alert">
            {props.errMsg}
        </div>
    )
}
