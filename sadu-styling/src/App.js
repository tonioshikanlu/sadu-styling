import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import NavBar from './components/Navbar'; 
import Footer from './components/Footer';
import Blog from './components/Blog';
import NewsletterForm from './components/Newsletter';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/js/bootstrap.bundle';


export default function App() {
    return (
      <Router>
        <div>
          <NavBar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<NewsletterForm />} />
          </Routes>
          <Footer /> 
        </div>
      </Router>
    );  }

