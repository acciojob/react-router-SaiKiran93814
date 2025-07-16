import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home.js";
import About from "../src/pages/About.js";
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
