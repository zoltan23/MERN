import React, { Fragment } from 'react';
import './Navbar.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './UI/Login';

export default function Navbar() {

    return (
        <Fragment>
            <Route>
                <nav className="navbar">
                    <ul className="navbar-left">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/link1">Link 1</Link></li>
                        <li><Link to="/link2">Link 2</Link></li>
                    </ul>
                    <ul className="navbar-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    <ul className="navbar-right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/  '></Route>
                </Switch>
            </Route>
        </Fragment>
    )
}
