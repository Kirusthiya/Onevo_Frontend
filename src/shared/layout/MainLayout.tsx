import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
          <AnimatePresence initial={false}>
            {isSubSidebarVisible && (
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 64, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  opacity: { duration: 0.2 }
                }}
                className="body-sub-sidebar"
                style={{ overflow: 'hidden' }}
              >
                <SubSidebar />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="content-area">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
