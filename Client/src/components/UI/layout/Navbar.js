import React, { Fragment, useContext } from 'react';
import './Navbar.css';
import { Link, NavLink, Route } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faHome, faBriefcase } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../services/UserContext';

export default function Navbar() {

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

    return (
        <Fragment>
            <Route>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <NavLink className="nav-item nav-link" to="/home" activeClassName="active"><FontAwesomeIcon icon={faHome} />&nbsp;Home</NavLink>
                            <NavLink className="nav-item nav-link" to="/portfolio" activeClassName="active"><FontAwesomeIcon icon={faBriefcase} />&nbsp;Portfolio</NavLink>
                            <NavLink className="nav-item nav-link" to="/test" activeClassName="active">MongoDB CRUD</NavLink>
                            <NavLink className="nav-item nav-link" to="/dashboard" activeClassName="active">Dashboard</NavLink>
                        </ul>
                        {isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />}
                    </div>
                 
                </nav>
            </Route>
        </Fragment>
    )
}
