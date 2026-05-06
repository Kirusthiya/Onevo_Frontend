import React from 'react';
import NavbarContainer from '../components/NavbarContainer/NavbarContainer';
import { ChevronDown } from 'lucide-react';
import './WorkspaceNav.css';

const WorkspaceNav: React.FC = () => {
  return (
    <NavbarContainer className="workspace-nav">
      <div className="profile-section">
        <div className="profile-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
            alt="Profile" 
            className="profile-image"
          />
          <div className="status-indicator"></div>
        </div>
      </div>

      <div className="workspace-selector">
        <div className="workspace-info">
          <span className="workspace-label">Workplace</span>
          <span className="workspace-name">Acme Corp</span>
        </div>
        <ChevronDown size={16} className="chevron-icon" />
      </div>
    </NavbarContainer>
  );
};

export default WorkspaceNav;
