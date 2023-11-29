import React from 'react';
import DashboardNavbar from '../shared/DashboardNavbar/DashboardNavbar';
import './Sidebar/Sidebar'

const AdminDashboard = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || {};
  return (
    <div>
      <DashboardNavbar showLogo={true} dropdownLinks={[
        { to: '/home', label: 'Home' },
        { to: '/profile', label: 'Profile' },
        { to: '/users', label: 'User' },
        { to: '/logout', label: 'Logout' },
      ]} />
      <h2>Admin Dashboard</h2>
      <ul>
        {currentUser.user.reports.map((report) => (
          <li key={report.title}>{report.title}</li>
        ))}
      </ul>
      <p>This is the Admin dashboard content.</p>
    </div>
  );
};

export default AdminDashboard;
