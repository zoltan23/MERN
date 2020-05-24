import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../services/UserContext'
import { handleSignOut } from '../../services/Auth'

export default function SignedInLinks() {
   
    const { role, isAuth, setIsAuth } = useContext(UserContext) 
    
    const signOut = (e) => {
        e.preventDefault()
        let signOut = window.confirm("Are you sure you want to log out?")
        if (signOut === true){
            handleSignOut()
            setIsAuth(false)
            console.log(isAuth)
        }
    }

    return (
            <ul className="navbar-nav ml-auto">
                {role === "admin" ? <NavLink className="nav-item nav-link" to="/dashboard" activeClassName="active">Dashboard</NavLink> : null}
                <NavLink className="nav-item nav-link" to="/settings" activeClassName="active"><FontAwesomeIcon icon={faCog} />&nbsp;Settings</NavLink>
                <NavLink className="nav-item nav-link" to="/" onClick={signOut} activeClassName="active"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;Sign Out</NavLink>
            </ul>
    )
}
