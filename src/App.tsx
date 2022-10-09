import React from 'react';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import HomeSection from './components/HomeSection/HomeSection';
import PortfolioNavbar from './components/Navbars/PorfolioNavbar';
import { ProjectSection } from './components/ProjectSection/ProjectSection';



function App() {
  return (
    <div className="App">

      <PortfolioNavbar />
      <HomeSection />
      <ProjectSection />

    </div>
  );
}

export default App;
