import React, { useEffect, useRef } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar shadow-none navbar-expand-lg navbar-dark">
            {/* Container wrapper */}
            <div className="container">
                {/* Navbar brand */}
                <a className="navbar-logo" href="/">
                    <img src="./sadu-logo.png" alt="Logo" className="navbar-logo" />
                </a>

                {/* Toggle button */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible wrapper */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Left links */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/contact">Contact</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link active" href="/blog">Blog</a>
                        </li> */}
                    </ul>
                    {/* Left links */}
                </div>
                {/* Collapsible wrapper */}
            </div>
            {/* Container wrapper */}
        </nav>
    );
};

export default Navbar;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="navbar-transparent"  data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand href="#home">Sadu-Styling</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="/services">Services</Nav.Link>
//           <Nav.Link href="/gallery">Gallery</Nav.Link>
//           <Nav.Link href="/contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;