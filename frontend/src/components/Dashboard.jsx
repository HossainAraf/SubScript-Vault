import React from 'react';
import Logout from './Logout';
import '../styles/dashboard.css';
import sample1 from '../assets/img/sample-1.jpg';
import sample2 from '../assets/img/sample-2.jpg';
import sample3 from '../assets/img/sample-3.jpg';
import sample4 from '../assets/img/sample-4.jpg';
import sample5 from '../assets/img/sample-5.jpg';
import sample6 from '../assets/img/sample-6.jpg';
import sample7 from '../assets/img/sample-7.jpg';
import sample8 from '../assets/img/sample-8.jpg';
import sample9 from '../assets/img/sample-9.jpg';

const Dashboard = () => (
  <div className="dashboard-wrapper">
    <div className="header-wrapper">
      <h1>Dashboard</h1>
    </div>
    <div className="content-wrapper grid grid-cols-1 gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3">
      <div className="w-full">
        <img src={sample1} alt="sample-1" className="w-full h-full object-cover" />
        <span className="title-wrapper">
          <h3>Content -1</h3>
          <p>Premium</p>
        </span>
      </div>
      <div className="w-full">
        <img src={sample2} alt="sample-2" className="w-full h-full object-cover" />
        <h3>Content -2</h3>
      </div>
      <div className="w-full">
        <img src={sample3} alt="sample-3" className="w-full h-full object-cover" />
        <h3>Content -3</h3>
      </div>
      <div className="w-full">
        <img src={sample4} alt="sample-4" className="w-full h-full object-cover" />
        <h3>Content -4</h3>
      </div>
      <div className="w-full">
        <img src={sample5} alt="sample-5" className="w-full h-full object-cover" />
        <h3>Content -5 </h3>
      </div>
      <div className="w-full">
        <img src={sample6} alt="sample-6" className="w-full h-full object-cover" />
        <h3>Content -6</h3>
      </div>
      <div className="w-full">
        <img src={sample7} alt="sample-7" className="w-full h-full object-cover" />
        <span className="title-wrapper">
          <h3>Content -7</h3>
          <p>Premium</p>
        </span>
      </div>
      <div className="w-full">
        <img src={sample8} alt="sample-8" className="w-full h-full object-cover" />
        <h3>Content -8</h3>
      </div>
      <div className="w-full">
        <img src={sample9} alt="sample-9" className="w-full h-full object-cover" />
        <h3>Content -9</h3>
      </div>
    </div>
    <div className="logout">
      <Logout />
    </div>
  </div>
);

export default Dashboard;
