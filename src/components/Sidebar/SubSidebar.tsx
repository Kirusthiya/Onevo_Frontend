import React from 'react';
import { Plus, Search, Filter, Download } from 'lucide-react';
import './SubSidebar.css';

const SubSidebar: React.FC = () => {
  return (
    <div className="sub-sidebar">
      <div className="sub-menu-actions">
        <button className="sub-action-btn primary"><Plus size={18} /></button>
        <button className="sub-action-btn"><Search size={18} /></button>
        <button className="sub-action-btn"><Filter size={18} /></button>
        <button className="sub-action-btn"><Download size={18} /></button>
      </div>
    </div>
  );
};

export default SubSidebar;
