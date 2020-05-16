import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faSignOutAlt, faUserPlus } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'


export default function SignedOutLinks() {
    return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><NavLink className="nav-link" to="/signin" activeClassName="active"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Login</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/signup" activeClassName="active"><FontAwesomeIcon icon={faUserPlus} />&nbsp;Sign Up</NavLink></li>
            </ul>
    )
}
