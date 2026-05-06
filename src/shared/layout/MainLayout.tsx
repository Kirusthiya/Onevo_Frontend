import React, { useState, useEffect } from 'react';
import WorkspaceNav from '../../navbar/WorkspaceNav';
import Navbar from '../../navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubSidebar from '../../components/Sidebar/SubSidebar';
import { useNavigationStore } from '../../stores/ui/use-navigation-store';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isSubSidebarVisible } = useNavigationStore();
  const [shouldRender, setShouldRender] = useState(isSubSidebarVisible);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isSubSidebarVisible) {
      setShouldRender(true);
      setAnimationClass('sub-sidebar-enter');
    } else {
      setAnimationClass('sub-sidebar-exit');
    }
  }, [isSubSidebarVisible]);

  const onAnimationEnd = () => {
    if (!isSubSidebarVisible) {
      setShouldRender(false);
    }
  };

  return (
    <div className="app-layout">
      {/* Row 1: Header */}
      <div className="layout-header">
        <div className="header-left">
          <WorkspaceNav />
        </div>
        <div className="header-right">
          <Navbar />
        </div>
      </div>

      {/* Row 2: Body */}
      <div className="layout-body">
        <div className="body-left">
          <Sidebar />
        </div>

        <main className="body-right">
          {shouldRender && (
            <div 
              className={`body-sub-sidebar ${animationClass}`}
              onAnimationEnd={onAnimationEnd}
            >
              <SubSidebar />
            </div>
          )}
          <div className="content-area">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
