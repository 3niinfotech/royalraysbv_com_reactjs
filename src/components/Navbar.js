import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Function to close the navbar when a link is clicked
  const closeMenu = () => {
    setIsNavExpanded(false);
  };

  const navLinkStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: 'ui-sans-serif',
    color: '#707070',
    textTransform: 'uppercase',
    letterSpacing: '1px',
 
  };
  const loginButtonStyle = {
    backgroundColor: '#707070',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'absolute',
    top: '10px',
    right: '10px',
  };


  return (
    <header>
     
      <div className="text-center py-2 position-relative" style={{ height: '60px' }}>
        <a href="/" className="position-absolute top-50 start-50 translate-middle">
          <img src="/BRR.png" alt="Logo" style={{ height: '150px', marginTop: '40px' }} />
        </a>
        <span className="position-absolute top-0 start-0 m-3" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#000' }}></span>
        <span className="position-absolute top-0 start-0 m-3" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#000' }}></span>
        <a href="https://royalrays.live/home" className="btn" style={loginButtonStyle}>
      Login
    </a>
      </div>

      <div className="container" style={{ height: '100px' }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" onClick={() => setIsNavExpanded(!isNavExpanded)} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isNavExpanded} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                {['HOME', 'EVENT',  'DIAMONDS', 'About us','Contact us','Blog'].map((item, index) => (
                  <li className="nav-item" key={index} style={{ borderRight: '1px solid #ffffff', margin: '0 30px', marginTop: '30px' }}>
                    <Link
                      to={
                        item === 'HOME'
                          ? '/'
                          : item === 'EVENT'
                          ? '/events'
                          : item === 'JOURNEY'
                          ? '/the-journey'
                          : item === 'COMPLIANCES'
                          ? '/compliance-1'
                          : item === 'CUSTOMIZATION'
                          ? '/Customization'
                          // : item === 'WHAT WE DO'
                          // ? '/whatwedo'
                          : item === 'About us'
                          ? '/history'
                          : item === 'Contact us'
                          ? '/contactus'
                          : item === 'Contact us'
                          ? '/contactus'
                        
                          : `/${item.toLowerCase()}`
                      }
                      className="nav-link"
                      style={navLinkStyle}
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                
          
              </ul>
           
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
