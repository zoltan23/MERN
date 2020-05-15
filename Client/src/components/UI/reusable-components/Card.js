import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="card col-3">
            <a href="#">
            <div className="card-body">
                This is a card.
                <p>{props.link} {props.linkName}</p>
            </div>
            </a>
        </div>
    )
}

