import React, { Fragment, useContext } from 'react';
import './Navbar.css';
import { Link, Route, Switch } from 'react-router-dom';
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
                        <li><Link to="/"><FontAwesomeIcon icon={faHome}/>&nbsp;Home</Link></li>
                        <li><Link to="/portfolio"><FontAwesomeIcon icon={faBriefcase} />&nbsp;Portfolio</Link></li>
                        <li><Link to="/link2">Link 2</Link></li>
                    </ul>
                    {isLoggedIn ? <SignedInLinks /> :  <SignedOutLinks />}
                </nav>
                {/* <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/settings' component={Settings}></Route>                
                    <Route path='/portfolio' component={Portfolio}></Route>                
                </Switch> */}
            </Route>
        </Fragment>
    )
}
