import React from 'react';
import { LayoutDashboard, Users, Clock, Briefcase, Settings, HelpCircle } from 'lucide-react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Users size={20} />, label: 'Employees' },
    { icon: <Clock size={20} />, label: 'Attendance' },
    { icon: <Briefcase size={20} />, label: 'Projects' },
    { icon: <Settings size={20} />, label: 'Settings' },
    { icon: <HelpCircle size={20} />, label: 'Support' },
  ];

  return (
    <aside className="main-sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-menu">
          {menuItems.map((item, index) => (
            <div key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
              <div className="menu-icon">{item.icon}</div>
              <span className="menu-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
