import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import Logo from '../images/mojito_logo.PNG';
import WelcomeUser from './WelcomeUser';
import LoginNav from './LoginNav';
import { LayoutOutlined, DollarOutlined, HistoryOutlined, TagOutlined, LineChartOutlined, PieChartOutlined,
  TwitterOutlined, InstagramOutlined, LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';

const Sidebar = () => {
  return (<div className='sidebar'>
    <div className='logo selected'>
      <Link to='/'><img className='logo_img' alt='logo' src={Logo} /><h1 style={{display: 'inline-block', padding: '10px', fontSize: '24px', color: '#FFF'}}>Mojito</h1></Link>
    </div>

    <div className='nav_wrapper'>
      <div className='main_nav'>
        <ul>
          <li><NavLink activeStyle={{color: '#FFF'}} className='nav_link' exact to='/'><LayoutOutlined /><span className='text_icon_padding'>Dashboard</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} className='nav_link' to='/budget'><DollarOutlined /><span className='text_icon_padding'>Budget</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} className='nav_link' to='/transaction_history'><HistoryOutlined /><span className='text_icon_padding'>Transaction History</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} className='nav_link' to='/income'><TagOutlined /><span className='text_icon_padding'>Income</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} className='nav_link' to='/expenses'><TagOutlined /><span className='text_icon_padding'>Expenses</span></NavLink></li>
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
