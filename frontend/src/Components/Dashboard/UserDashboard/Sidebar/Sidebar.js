
import React from 'react';
import './Sidebar.css';
const Sidebar = ({ selectedComponent, setSelectedComponent }) => {
  return (
    <div className="sidebar">
      <p
        className={`sidebar-link ${selectedComponent === 'home' ? 'active' : ''}`}
        onClick={() => setSelectedComponent('home')}
      >
        Home
      </p>
      <p
        className={`sidebar-link ${selectedComponent === 'users' ? 'active' : ''}`}
        onClick={() => setSelectedComponent('users')}
      >
        Users
      </p>
    </div>
  );
};

export default Sidebar;
