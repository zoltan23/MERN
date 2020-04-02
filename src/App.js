import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
