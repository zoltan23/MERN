import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                This is a card.
                <p>{props.link} {props.linkName}</p>
            </div>
        </div>
    )
}

