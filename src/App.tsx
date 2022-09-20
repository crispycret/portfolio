import React from 'react';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import HomeSection from './components/HomeSection/HomeSection';
import PortfolioNavbar from './components/Navbars/PorfolioNavbar';


function App() {
  return (
    <div className="App">

      <PortfolioNavbar />
      <HomeSection />

    </div>
  );
}

export default App;
