import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'


export default function SignedInLinks() {
    return (
        <div>
            <ul className="navbar-right">
                <li><Link to="/settings"><FontAwesomeIcon icon={faCog} />&nbsp;Settings</Link></li>
                <li><Link to="/"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Sign Out</Link></li>
            </ul>
        </div>
    )
}
