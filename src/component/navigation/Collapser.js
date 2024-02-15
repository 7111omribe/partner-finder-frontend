import React, { useState } from 'react';

const Collapser = ({ title, children }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapser ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="collapser-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span>{isCollapsed ? '▼' : '▲'}</span>
      </div>
      {!isCollapsed && (
        <div className="collapser-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapser;
