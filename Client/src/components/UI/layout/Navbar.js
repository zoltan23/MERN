import React, { Fragment, useContext } from 'react';
import './Navbar.css';
import { NavLink, Route } from 'react-router-dom';
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
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapse_target">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className="nav-link" to="/home" activeClassName="active"><FontAwesomeIcon icon={faHome} />&nbsp;Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/portfolio" activeClassName="active"><FontAwesomeIcon icon={faBriefcase} />&nbsp;Portfolio</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/test" activeClassName="active">MongoDB CRUD</NavLink></li>
                        </ul>
                        {isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />}
                    </div>
                </nav>
            </Route>
        </Fragment>
    )
}
