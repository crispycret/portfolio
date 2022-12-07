import React from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import HomePage from './pages/HomePage';
import MyNavbar from './components/Navbars/Navbar';
import Dashboard from './pages/Dashboard';

import UserManager from './helpers/api/portfolio/UserManager';
import Portfolio from './helpers/api/portfolio/portfolio';
import github from './helpers/api/github';


function App() {

  const apis = {
    portfolio: Portfolio(),
    github,
  }

  let props = {
    apis,
  }

  return (
    <div className="App">

      {/* <MyNavbar /> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage {...props}/>} />
          <Route path="/dashboard/*" element={<Dashboard {...props}/>} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
