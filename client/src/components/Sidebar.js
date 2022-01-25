import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import { LayoutOutlined, DollarOutlined, HistoryOutlined, TagOutlined, LineChartOutlined, PieChartOutlined,
  TwitterOutlined, InstagramOutlined, LinkedinOutlined, FacebookOutlined,
  UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Logo from '../images/mojito_logo.PNG';

const Sidebar = () => {
  return (<div className='w-1/6 h-screen sidebar'>
    <div className='logo selected'>
      <Link to='/'><img className='logo_img' src={Logo} /><h1 style={{display: 'inline-block', padding: '10px', fontSize: '24px'}}>Mojito</h1></Link>
    </div>

    <div className='nav_wrapper'>
      <div className='main_nav'>
        <ul>
          <li><NavLink activeStyle={{color: '#FFF'}} exact to='/'><LayoutOutlined />Dashboard</NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/budget'><DollarOutlined />Budget</NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/transaction_history'><HistoryOutlined />Transaction History</NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/expenses'><TagOutlined />Expenses</NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/investments'><LineChartOutlined />Investments</NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/spending_analyzer'><PieChartOutlined />Spending Analyzer</NavLink></li>
        </ul>
      </div>

      <div className='account_info'>
        <p className='selected'>Welcome, Trevor!</p>
        <ul>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/my_account'><UserOutlined />My Account</NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/sign_out'><LogoutOutlined />Sign Out</NavLink></li>
        </ul>
      </div>

      <div className='footer'>
        <TwitterOutlined />
        <InstagramOutlined />
        <LinkedinOutlined />
        <FacebookOutlined />
      </div>
    </div>
  </div>);
};

export default Sidebar;
