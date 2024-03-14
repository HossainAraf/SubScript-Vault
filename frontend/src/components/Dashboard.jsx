import React from 'react';
import Logout from './Logout';
import '../styles/dashboard.css';
import sample1 from '../assets/img/sample-1.jpg';
import sample2 from '../assets/img/sample-2.jpg';
// import sample3 from '../assets/img/sample-3.jpg';
// import sample4 from '../assets/img/sample-4.jpg';
// import sample5 from '../assets/img/sample-5.jpg';
// import sample6 from '../assets/img/sample-6.jpg';
// import sample7 from '../assets/img/sample-7.jpg';
// import sample8 from '../assets/img/sample-8.jpg';
// import sample9 from '../assets/img/sample-9.jpg';

const Dashboard = () => (
  <div className="dashboard grid grid-cols-3 gap-4">
    <h1>Dashboard</h1>
    <Logout />
  </div>
);

export default Dashboard;
