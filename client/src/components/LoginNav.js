import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton';
import LoginButton from '../components/LoginButton';

const LoginNav = () => {
    const { isAuthenticated } = useAuth0();

  return (isAuthenticated && <div>
      <ul>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/my_account'><UserOutlined /><span className='text_icon_padding'>My Account</span></NavLink></li>
          <li><LogoutOutlined /> <LogoutButton /></li>
        </ul>
  </div>) || 
        (<ul>
            <li><UserOutlined /> <LoginButton /></li>
        </ul>)
  ;
};

export default LoginNav;
