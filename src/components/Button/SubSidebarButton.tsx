import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './SubSidebarButton.css';

interface SubSidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SubSidebarButton: React.FC<SubSidebarButtonProps> = ({ icon, label, active, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setTooltipPos({
        top: rect.top + rect.height / 2,  // vertically centered on the button
        left: rect.right + 10,             // 10px to the right of the button
      });
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="sub-button-container">
      <button
        ref={btnRef}
        className={`sub-sidebar-button ${active ? 'active' : ''}`}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="sub-button-icon">{icon}</div>
      </button>

      {/* Portal tooltip — renders at document.body, never clipped by parent overflow */}
      {hovered && ReactDOM.createPortal(
        <div
          className="sub-button-tooltip-portal"
          style={{ top: tooltipPos.top, left: tooltipPos.left }}
        >
          {label}
        </div>,
        document.body
      )}
    </div>
  );
};

export default SubSidebarButton;
