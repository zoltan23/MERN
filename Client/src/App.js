import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { UserContext } from './components/services/UserContext';
import Navbar from './components/UI/layout/Navbar'
import Home from './components/UI/screens/Home';
import Settings from './components/UI/screens/Settings';
import Login from './components/UI/screens/Login';
import Portfolio from './components/UI/screens/Portfolio';
import Test from './components/UI/screens/Test';
import SignUp from './components/UI/screens/SignUp';
import Dashboard from './components/UI/screens/Dashboard';
import './App.css';
import Search from './components/UI/reusable-components/Search';

function App() {

  const { isAuth } = useContext(UserContext)

  return (
    <div className="App">
      <BrowserRouter>
        {!isAuth ? <Redirect to="/signin" /> : <Redirect to="/home" />}
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/signin' component={Login}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/settings' component={Settings}></Route>
          <Route path='/portfolio' component={Portfolio}></Route>
          <Route path='/test' component={Test}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
