import React from 'react';
import './SubSidebarButton.css';

interface SubSidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SubSidebarButton: React.FC<SubSidebarButtonProps> = ({ icon, label, active, onClick }) => {
  return (
    <div className="sub-button-container">
      <button 
        className={`sub-sidebar-button ${active ? 'active' : ''}`}
        onClick={onClick}
      >
        <div className="sub-button-icon">{icon}</div>
      </button>
      <div className="sub-button-tooltip">{label}</div>
    </div>
  );
};

export default SubSidebarButton;
