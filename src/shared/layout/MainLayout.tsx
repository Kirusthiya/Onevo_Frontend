import React from 'react';
import Navigation from '../../navbar/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubSidebar from '../../components/Sidebar/SubSidebar';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Navigation />
      
      <div className="layout-body">
        <Sidebar />
        
        <div className="body-container">
          <SubSidebar />
          <main className="content-viewport">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
