import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/UI/layout/Navbar'
import './App.css';
import Home from './components/Home';
import Settings from './components/UI/Settings';
import Login from './components/UI/Login';
import Portfolio from './components/UI/screens/Portfolio';
import { UserContext } from './components/services/UserContext'
import Test from './components/UI/screens/Test';
import SignUp from './components/UI/screens/SignUp';
import axios from 'axios';

function App() {

  useEffect(() => {
    getClientsFromDb()
    }, [])
    
     const getClientsFromDb = () => {
        axios.get('api/clients').then((res) => {
          const data = res.data
          console.log('data', data)
        }).catch((err) => {
          console.log('err', err)
        })
      }
  const [isLoggedIn, setIsLoggedIn] = useState(false) 

  return (
    <div className="App">
      <BrowserRouter>
      { !isLoggedIn ? <Redirect to="/signin" /> : <Redirect to="/home" />} 
          <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <Switch>
            <Route path='/home' exact component={Home}></Route>
            <Route path='/signin' component={Login}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/settings' component={Settings}></Route>
            <Route path='/portfolio' component={Portfolio}></Route>
            <Route path='/test' component={Test}></Route>
        </Switch>
          </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
