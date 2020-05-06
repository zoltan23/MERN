import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faSignOutAlt, faUserPlus } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'


export default function SignedOutLinks() {
    return (
        <div>
            <ul className="navbar-center">
                <li><NavLink to="/signin" activeClassName="active"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Login</NavLink></li>
                <li><NavLink to="/signup" activeClassName="active"><FontAwesomeIcon icon={faUserPlus} />&nbsp;Sign Up</NavLink></li>
            </ul>
        </div>
    )
}
