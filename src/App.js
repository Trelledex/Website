import React from 'react';
import './App.css';
import Disclaimer from './Pages/Disclaimer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Sections/Home';
import { Helmet } from 'react-helmet';


function App() {
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
  
    <Router>
        <Helmet>
        <title>Trelledex</title>
        <meta name="description" content="Trelledex is a consulting company" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/disclaimer" element={<Disclaimer />} />    
        </Routes>
    </Router>
  );
}

export default App;
