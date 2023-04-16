import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './components/layouts/MainLayout';
import { Home } from './pages/Home';
import { Skills } from 'pages/Skills';
import { Projects } from 'pages/Projects';

function App() {
  return (
    <MainLayout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <div />} />
        <Route path="/skills/*" element={ <Skills />} />
        <Route path="/projects/*" element={ <Projects />} />
        <Route path="/contact" element={ <div />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>

    </MainLayout>
  );
}

export default App;
