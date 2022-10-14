import React from 'react';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import HomePage from './pages/HomePage';
import MyNavbar from './components/Navbars/Navbar';



function App() {
  return (
    <div className="App">

      {/* <MyNavbar /> */}
      <HomePage />

    </div>
  );
}

export default App;
