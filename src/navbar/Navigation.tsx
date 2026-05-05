import React from 'react';
import Navbar from './Navbar';
import WorkspaceNav from './WorkspaceNav';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-inner">
        <div className="workspace-nav-wrapper">
          <WorkspaceNav />
        </div>
        <div className="main-nav-wrapper">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
