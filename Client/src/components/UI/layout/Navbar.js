import React, { Fragment, useContext } from 'react';
import './Navbar.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faHome, faBriefcase } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../services/UserContext';

export default function Navbar() {
    
    const {isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    
    return (
        <Fragment>
            <Route>
                <nav className="navbar">
                    <ul className="navbar-left">
                        <li><NavLink to="/home" activeClassName="active"><FontAwesomeIcon icon={faHome}/>&nbsp;Home</NavLink></li>
                        <li><NavLink to="/portfolio" activeClassName="active"><FontAwesomeIcon icon={faBriefcase} />&nbsp;Portfolio</NavLink></li>
                        <li><NavLink to="/test" activeClassName="active">MongoDB CRUD</NavLink></li>
                    </ul>
                    {isLoggedIn ? <SignedInLinks /> :  <SignedOutLinks />}
                </nav>
            </Route>
        </Fragment>
    )
}
