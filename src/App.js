import React from 'react';
import './App.css';
import Disclaimer from './Pages/Disclaimer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Sections/Home';

function App() {
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/disclaimer" element={<Disclaimer />} />    
        
        </Routes>
    </Router>
  );
}

export default App;
