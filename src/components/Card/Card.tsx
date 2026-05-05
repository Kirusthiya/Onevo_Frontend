import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  glass = true 
}) => {
  return (
    <div className={`card ${glass ? 'card-glass' : 'card-solid'} ${className}`}>
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;
