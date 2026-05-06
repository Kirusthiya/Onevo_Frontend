import React from 'react';
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
  const { activeMainItem, setActiveMainItem } = useNavigationStore();

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
              onClick={() => setActiveMainItem(item.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
