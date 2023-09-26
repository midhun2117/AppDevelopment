import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Assets/Dashboard.css'; 

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h1>Welcome to Your Dashboard</h1>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h2>Orders</h2>
            <p>2,500</p>
          </div>
          <div className="stat-card">
            <h2>Revenue</h2>
            <p>$1,50,000</p>
          </div>
          <div className="stat-card">
            <h2>Customers</h2>
            <p>500</p>
          </div>
        </div>
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Received a new order from our customer</li>
            <li>total orders: 100</li>
            <li>New customer registered</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
