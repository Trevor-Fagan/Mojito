import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import Logo from '../images/mojito_logo.PNG';

const Sidebar = () => {
  return (<div className='lg:w-1/6 lg:h-screen md:w-full md:h-max sm:w-full sidebar'>
    <div className='logo selected'>
      <Link to='/'><img className='logo_img' alt='logo' src={Logo} /><h1 style={{display: 'inline-block', padding: '10px', fontSize: '24px'}}>Mojito</h1></Link>
    </div>

    <div className='nav_wrapper'>
      <div className='main_nav'>
        <ul>
          <li><NavLink activeStyle={{color: '#FFF'}} exact to='/'><span className='text_icon_padding'>Dashboard</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/budget'><span className='text_icon_padding'>Budget</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/transaction_history'><span className='text_icon_padding'>Transaction History</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/income'><span className='text_icon_padding'>Income</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/expenses'><span className='text_icon_padding'>Expenses</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/investments'><span className='text_icon_padding'>Investments</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/spending_analyzer'><span className='text_icon_padding'>Spending Analyzer</span></NavLink></li>
        </ul>
      </div>

      <div className='account_info'>
        
      </div>

      <div className='footer'>
        <div>
          <a target='blank' href='http://www.twitter.com/'></a>
          <a target='blank' href='http://www.instagram.com/'></a>
          <a target='blank' href='http://www.linkedin.com/'></a>
          <a target='blank' href='http://www.facebook.com/'></a>
        </div>
      </div>
    </div>
  </div>);
};

export default Sidebar;
