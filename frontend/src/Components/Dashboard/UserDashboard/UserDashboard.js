import React from 'react';
import DashboardNavbar from '../shared/DashboardNavbar/DashboardNavbar';
import './Sidebar/Sidebar'

const UserDashboard = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || {};

  return (

    <div>
      <DashboardNavbar showLogo={true} dropdownLinks={[
        { to: '/home', label: 'Home' },
        { to: '/profile', label: 'Profile' },
        { to: '/users', label: 'User' },
        { to: '/logout', label: 'Logout' },
      ]} />
      <h2>User Dashboard</h2>
      <ul>
        {currentUser.user.reports.map((report) => (
          <li key={report.title}>{report.title}</li>
        ))}
      </ul>
      <p>This is the User dashboard content.</p>
    </div>
  );
};

export default UserDashboard;
