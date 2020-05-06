import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/UI/layout/Navbar'
import './App.css';
import Home from './components/Home';
import Settings from './components/UI/Settings';
import Login from './components/UI/Login';
import Portfolio from './components/UI/screens/Portfolio';
import { UserContext } from './components/services/UserContext'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false) 

  return (
    <div className="App">
      <BrowserRouter>
          <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/settings' component={Settings}></Route>
            <Route path='/portfolio' component={Portfolio}></Route>
        </Switch>
          </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
