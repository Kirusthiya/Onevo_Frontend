import React from 'react';
import NavbarContainer from '../components/NavbarContainer/NavbarContainer';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer className="main-navbar">
      <div className="navbar-logo">
        <span className="logo-text">ONEV0</span>
        <div className="logo-dot"></div>
      </div>
      
      <div className="navbar-links">
        <a href="#solutions" className="nav-link">Solutions</a>
        <a href="#hr-suite" className="nav-link">HR Suite</a>
        <a href="#work-suite" className="nav-link">Work Suite</a>
        <a href="#pricing" className="nav-link">Pricing</a>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
