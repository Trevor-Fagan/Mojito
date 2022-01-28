import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import WelcomeUser from './WelcomeUser';
import '../styles/Sidebar.css';
import { LayoutOutlined, DollarOutlined, HistoryOutlined, TagOutlined, LineChartOutlined, PieChartOutlined,
  TwitterOutlined, InstagramOutlined, LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';
import Logo from '../images/mojito_logo.PNG';
import LoginNav from './LoginNav';

const Sidebar = () => {
  return (<div className='w-1/6 h-screen sidebar'>
    <div className='logo selected'>
      <Link to='/'><img className='logo_img' alt='logo' src={Logo} /><h1 style={{display: 'inline-block', padding: '10px', fontSize: '24px'}}>Mojito</h1></Link>
    </div>

    <div className='nav_wrapper'>
      <div className='main_nav'>
        <ul>
          <li><NavLink activeStyle={{color: '#FFF'}} exact to='/'><LayoutOutlined /><span className='text_icon_padding'>Dashboard</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/budget'><DollarOutlined /><span className='text_icon_padding'>Budget</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/transaction_history'><HistoryOutlined /><span className='text_icon_padding'>Transaction History</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/income'><TagOutlined /><span className='text_icon_padding'>Income</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/expenses'><TagOutlined /><span className='text_icon_padding'>Expenses</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/investments'><LineChartOutlined /><span className='text_icon_padding'>Investments</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/spending_analyzer'><PieChartOutlined /><span className='text_icon_padding'>Spending Analyzer</span></NavLink></li>
        </ul>
      </div>

      <div className='account_info'>
        <WelcomeUser />
        <LoginNav />
      </div>

      <div className='footer'>
        <div>
          <a target='blank' href='http://www.twitter.com/'><TwitterOutlined className='footer_icon' style={{fontSize: '24px', padding: '4px', paddingLeft: '0'}} /></a>
          <a target='blank' href='http://www.instagram.com/'><InstagramOutlined className='footer_icon' style={{fontSize: '24px', padding: '4px'}} /></a>
          <a target='blank' href='http://www.linkedin.com/'><LinkedinOutlined className='footer_icon' style={{fontSize: '24px', padding: '4px'}} /></a>
          <a target='blank' href='http://www.facebook.com/'><FacebookOutlined className='footer_icon' style={{fontSize: '24px', padding: '4px'}} /></a>
        </div>
      </div>
    </div>
  </div>);
};

export default Sidebar;
