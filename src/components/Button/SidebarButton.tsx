import React from 'react';
import './SidebarButton.css';

interface SidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, label, active, onClick }) => {
  return (
    <button 
      className={`sidebar-button ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="button-icon">{icon}</div>
      <span className="button-label">{label}</span>
    </button>
  );
};

export default SidebarButton;
