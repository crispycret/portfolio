import React from 'react';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import MyNavbar from './components/MyNavbar';
import NavbarBasicExample from './components/Navbars/NavbarBasicExample';
import NavbarBrandExample from './components/Navbars/NavbarBrandExample';
import NavbarColorSchemesExample from './components/Navbars/NavbarColorSchemeExample';
import NavbarTextLinkExample from './components/Navbars/NavbarTextLinkExample';
import PortfolioNavbar from './components/Navbars/PorfolioNavbar';


function App() {
  return (
    <div className="App">
      {/* <MyNavbar /> */}
      {/* <Navbar />
      <NavbarBasicExample/>
      <NavbarBrandExample />
      <NavbarColorSchemesExample />
      <NavbarTextLinkExample/>
      <HomeSection /> */}


      <PortfolioNavbar />

{/* 
      <DemoSection />
      <DemoSection />
      <DemoSection />
 */}
    </div>
  );
}

export default App;
