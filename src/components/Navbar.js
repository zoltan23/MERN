import React from 'react';
import './Navbar.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';

export default function Navbar() {
   
    return (
        <div>
            <Route>
                <nav>
                    <ul className="navbar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/link1">Link 1</Link></li>
                        <li><Link to="/link2">Link 2</Link></li>
                    </ul>
                </nav>
                <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/link1' ></Route>
                        <Route path='/link2' ></Route>
                </Switch>
            </Route>
        </div>
    )
}
