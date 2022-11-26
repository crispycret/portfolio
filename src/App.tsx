import React from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';

import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import HomePage from './pages/HomePage';
import MyNavbar from './components/Navbars/Navbar';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">

      {/* <MyNavbar /> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <HomePage />



    </div>
  );
}

export default App;
