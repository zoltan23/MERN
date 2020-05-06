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
        <div>
            <ul className="navbar-right">
                <li><NavLink to="/settings" activeClassName="active"><FontAwesomeIcon icon={faCog} />&nbsp;Settings</NavLink></li>
                <li><NavLink to="/" onClick={signOut} activeClassName="active"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Sign Out</NavLink></li>
            </ul>
        </div>
    )
}
