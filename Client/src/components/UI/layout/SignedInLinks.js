import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../services/UserContext'

export default function SignedInLinks() {
   
    const {   isLoggedIn, setIsLoggedIn } = useContext(UserContext) 
    
    const signOut = (e) => {
        e.preventDefault()
        let signOut = window.confirm("Are you sure you want to log out?")
        if (signOut === true){
                setIsLoggedIn(false)
               console.log(isLoggedIn)
        }
    }

    return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><NavLink className="nav-link" to="/settings" activeClassName="active"><FontAwesomeIcon icon={faCog} />&nbsp;Settings</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/" onClick={signOut} activeClassName="active"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Sign Out</NavLink></li>
            </ul>
    )
}
