import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';

const LoginNav = () => {
    const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && <div>
      <ul>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/my_account'><UserOutlined /><span className='text_icon_padding'>My Account</span></NavLink></li>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/sign_out'><LogoutOutlined /><span className='text_icon_padding'>Sign Out</span></NavLink></li>
        </ul>
  </div> || 
        <ul>
            <li><NavLink activeStyle={{color: '#FFF'}} to='/sign_up'><UserOutlined /><span className='text_icon_padding'>Sign Up</span></NavLink></li>
            <li><NavLink activeStyle={{color: '#FFF'}} to='/sign_in'><UserOutlined /><span className='text_icon_padding'>Sign In</span></NavLink></li>
        </ul>
  ;
};

export default LoginNav;
