import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="card custom-card-color">
            <div className="card-header bg-secondary">
                This is a card.
                </div>
            <div className="card-body">
                <p>{`${props.link} ${props.description}`}</p>
            </div>
        </div>
    )
}

