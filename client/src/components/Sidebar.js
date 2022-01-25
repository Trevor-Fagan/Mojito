import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import { LayoutOutlined, DollarOutlined, HistoryOutlined, TagOutlined, LineChartOutlined, PieChartOutlined,
  TwitterOutlined, InstagramOutlined, LinkedinOutlined, FacebookOutlined,
  UserOutlined, LogoutOutlined } from '@ant-design/icons';

const Sidebar = () => {
  return (<div className='w-1/6 h-screen sidebar'>
    <div className='logo selected'>
      Mojito
    </div>

    <div className='nav_wrapper'>
      <div className='main_nav'>
        <ul>
          <li><Link className='selected' to='/'><LayoutOutlined />Dashboard</Link></li>
          <li><Link to='/budget'><DollarOutlined />Budget</Link></li>
          <li><Link to='/transaction_history'><HistoryOutlined />Transaction History</Link></li>
          <li><Link to='/expenses'><TagOutlined />Expenses</Link></li>
          <li><Link to='/investments'><LineChartOutlined />Investments</Link></li>
          <li><Link to='/spending_analyzer'><PieChartOutlined />Spending Analyzer</Link></li>
        </ul>
      </div>

      <div className='account_info'>
        <p className='selected'>Welcome, Trevor!</p>
        <ul>
          <li><Link to='/my_account'><UserOutlined />My Account</Link></li>
          <li><Link to='/sign_out'><LogoutOutlined />Sign Out</Link></li>
        </ul>
      </div>

      <div className='footer'>
        <TwitterOutlined />
        <InstagramOutlined />
        <LinkedinOutlined />
      </div>
    </div>
  </div>);
};

export default Sidebar;
