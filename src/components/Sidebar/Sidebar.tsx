import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  MessageSquare, 
  Inbox, 
  Users, 
  Briefcase, 
  Building2, 
  Calendar, 
  Shield, 
  Settings 
} from 'lucide-react';
import SidebarButton from '../Button/SidebarButton';
import { useNavigationStore } from '../../stores/ui/use-navigation-store';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const { activeMainItem, setActiveMainItem, setActiveSubItem } = useNavigationStore();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', id: 'home' },
    { icon: <MessageSquare size={20} />, label: 'Chat', id: 'chat' },
    { icon: <Inbox size={20} />, label: 'Inbox', id: 'inbox' },
    { icon: <Users size={20} />, label: 'People', id: 'people' },
    { icon: <Briefcase size={20} />, label: 'Workforce', id: 'workforce' },
    { icon: <Building2 size={20} />, label: 'Org', id: 'org' },
    { icon: <Calendar size={20} />, label: 'Calendar', id: 'calendar' },
    { icon: <Shield size={20} />, label: 'Admin', id: 'admin' },
    { icon: <Settings size={20} />, label: 'Settings', id: 'settings' },
  ];

  const handleNavigation = (id: string) => {
    setActiveMainItem(id);
    
    // Default sub-paths and sub-items for main menu items
    const defaults: Record<string, { path: string; subItem: string }> = {
      home: { path: '/home', subItem: '' },
      chat: { path: '/chat', subItem: '' },
      inbox: { path: '/inbox', subItem: '' },
      people: { path: '/people/employees', subItem: 'Employees' },
      workforce: { path: '/workforce/presence', subItem: 'Presence' },
      org: { path: '/org/orgchart', subItem: 'Org Chart' },
      calendar: { path: '/calendar/calendar', subItem: 'Calendar' },
      admin: { path: '/admin/peopleaccess', subItem: 'People Access' },
      settings: { path: '/settings/general', subItem: 'General' }
    };

    const config = defaults[id] || { path: `/${id}`, subItem: '' };
    
    if (config.subItem) {
      setActiveSubItem(config.subItem);
    }
    
    navigate(config.path);
  };

  return (
    <aside className="main-sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-menu">
          {menuItems.map((item) => (
            <SidebarButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeMainItem === item.id}
              onClick={() => handleNavigation(item.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
