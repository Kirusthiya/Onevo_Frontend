import React from 'react';
import { 
  UserRound, CalendarX, UserCheck, Folder, Briefcase, 
  Layout, Target, FileText, Clock, BarChart3, 
  GitGraph, Layers, Users, Tags, Scale,
  Calendar, Clock3, ClipboardCheck, Timer,
  UserLock, Key, History, Bot, Smartphone, Lock,
  Settings2, Bell, MessageCircle, Puzzle, Palette, CreditCard, Cpu
} from 'lucide-react';
import { useNavigationStore } from '../../stores/ui/use-navigation-store';
import SubSidebarButton from '../Button/SubSidebarButton';
import './SubSidebar.css';

const SubSidebar: React.FC = () => {
  const { activeMainItem, activeSubItem, setActiveSubItem } = useNavigationStore();

  const subMenus: Record<string, { label: string; icon: React.ReactNode }[]> = {
    people: [
      { label: 'Employees', icon: <UserRound size={20} /> },
      { label: 'Leave', icon: <CalendarX size={20} /> }
    ],
    workforce: [
      { label: 'Presence', icon: <UserCheck size={20} /> },
      { label: 'Project', icon: <Folder size={20} /> },
      { label: 'My Work', icon: <Briefcase size={20} /> },
      { label: 'Planner', icon: <Layout size={20} /> },
      { label: 'Goals', icon: <Target size={20} /> },
      { label: 'Docs', icon: <FileText size={20} /> },
      { label: 'Timesheets', icon: <Clock size={20} /> },
      { label: 'Analytics', icon: <BarChart3 size={20} /> }
    ],
    org: [
      { label: 'Org Chart', icon: <GitGraph size={20} /> },
      { label: 'Departments', icon: <Layers size={20} /> },
      { label: 'Teams', icon: <Users size={20} /> },
      { label: 'Job Families', icon: <Tags size={20} /> },
      { label: 'Legal Entities', icon: <Scale size={20} /> }
    ],
    calendar: [
      { label: 'Calendar', icon: <Calendar size={20} /> },
      { label: 'Schedules', icon: <Clock3 size={20} /> },
      { label: 'Attendance', icon: <ClipboardCheck size={20} /> },
      { label: 'Overtime', icon: <Timer size={20} /> }
    ],
    admin: [
      { label: 'People Access', icon: <UserLock size={20} /> },
      { label: 'Permissions', icon: <Key size={20} /> },
      { label: 'Activity Trail', icon: <History size={20} /> },
      { label: 'Agents', icon: <Bot size={20} /> },
      { label: 'Devices', icon: <Smartphone size={20} /> },
      { label: 'Data & Privacy', icon: <Lock size={20} /> }
    ],
    settings: [
      { label: 'General', icon: <Settings2 size={20} /> },
      { label: 'Alerts', icon: <Bell size={20} /> },
      { label: 'Notifications', icon: <MessageCircle size={20} /> },
      { label: 'Integrations', icon: <Puzzle size={20} /> },
      { label: 'Branding', icon: <Palette size={20} /> },
      { label: 'Billing', icon: <CreditCard size={20} /> },
      { label: 'System', icon: <Cpu size={20} /> }
    ],
  };

  const currentItems = subMenus[activeMainItem] || [];

  if (currentItems.length === 0) return null;

  return (
    <div className="sub-sidebar">
      <div className="sub-sidebar-menu">
        {currentItems.map((item) => (
          <SubSidebarButton
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={activeSubItem === item.label}
            onClick={() => setActiveSubItem(item.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default SubSidebar;
