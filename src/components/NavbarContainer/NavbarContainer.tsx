import React from 'react';
import './NavbarContainer.css';

interface NavbarContainerProps {
  children: React.ReactNode;
  className?: string;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`navbar-glass-container ${className}`}>
      {children}
    </div>
  );
};

export default NavbarContainer;
