import React from 'react';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Home from './pages/HomePage';
import PortfolioNavbar from './components/Navbars/PorfolioNavbar';
import { ProjectSection } from './components/Home/Project/ProjectSection';



function App() {
  return (
    <div className="App">

      <PortfolioNavbar />
      <Home />

    </div>
  );
}

export default App;
