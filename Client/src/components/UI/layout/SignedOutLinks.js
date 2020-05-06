import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faSignOutAlt, faUserPlus } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'


export default function SignedOutLinks() {
    return (
        <div>
            <ul className="navbar-center">
                <li><Link to="/login"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Login</Link></li>
                <li><Link to="/signup"><FontAwesomeIcon icon={faUserPlus} />&nbsp;Sign Up</Link></li>
            </ul>
        </div>
    )
}
