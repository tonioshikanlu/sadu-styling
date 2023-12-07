import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Header from './components/Header'; // Import the Header component
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Render the Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}