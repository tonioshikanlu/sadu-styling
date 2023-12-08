import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer';
import './App.css';

export default function App() {
    return (
      <Router>
        <div className="App">
          <Navbar /> {/* Render the Navbar component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer /> {/* Add the closing angle bracket here */}
        </div>
      </Router>
    );  }

