import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';

import './assets/css/App.css';

import MyNavbar from './components/Navbars/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';

import PortfolioAPI from './helpers/api/portfolio/PortfolioAPI';
import GithubAPI from './helpers/api/github/GithubAPI';


function App() {

  const apis = {
    portfolio: PortfolioAPI(),
    github: GithubAPI(),
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
