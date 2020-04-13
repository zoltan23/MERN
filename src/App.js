import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import Carousel from './components/UI/Carousel';


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
