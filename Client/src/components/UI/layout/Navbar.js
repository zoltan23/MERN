import React, { Fragment, useContext, useState } from 'react';
import { UserContext } from '../../services/UserContext';
import { NavLink, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { faHome, faBriefcase } from '../../../../node_modules/@fortawesome/free-solid-svg-icons'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './Navbar.css';

export default function Navbar() {

   const { isAuth } = useContext(UserContext)

    return (
        <Fragment>
            <Route>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <NavLink className="nav-item nav-link" to="/home" activeClassName="active"><FontAwesomeIcon icon={faHome} />&nbsp;Home</NavLink>
                            <NavLink className="nav-item nav-link" to="/portfolio" activeClassName="active"><FontAwesomeIcon icon={faBriefcase} />&nbsp;Portfolio</NavLink>
                            <NavLink className="nav-item nav-link" to="/test" activeClassName="active">MongoDB CRUD</NavLink>
                        </ul>
                        {isAuth ? <SignedInLinks /> : <SignedOutLinks />}
                    </div>
                </div>
                </nav>
            </Route>
        </Fragment>
    )
}
