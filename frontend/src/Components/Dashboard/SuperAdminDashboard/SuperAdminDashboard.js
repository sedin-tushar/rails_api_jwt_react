import React, { useState } from 'react';
import DashboardNavbar from '../shared/DashboardNavbar/DashboardNavbar';
import Users from '../../Users/Users';
import Sidebar from './Sidebar/Sidebar';
import './SuperAdminDashboard.css'
const SuperAdminDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('home');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'home':
        return <h2>Super Admin Dashboard</h2>;
      case 'users':
        return <h2>Super Admin Dashboard Users</h2>;
      default:
        return <h2>Super Admin Dashboard</h2>;
    }
  };

  return (
    <div>
      <DashboardNavbar showLogo={true} dropdownLinks={[
        { to: '/home', label: 'Home', onClick: () => setSelectedComponent('home') },
        { to: '/users', label: 'Users', onClick: () => setSelectedComponent('users') },
        // Add more dropdown links as needed
        { to: '/logout', label: 'Logout' },
      ]} />

      <div className="container">
        {/* Sidebar Component */}
        <Sidebar selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />

        {/* Main Content Area */}
        <div className="main-content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
