import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const LoginNav = () => {
  const { isAuthenticated } = useAuth0();

  return (isAuthenticated && <div>
      <ul style={{marginLeft: '-32px'}}>
          <li><NavLink style={{textDecoration: 'none', color: "#ACC6EB"}} activeStyle={{color: '#FFF'}} to='/my_account'><UserOutlined /><span className='text_icon_padding'>My Account</span></NavLink></li>
          <li><LogoutOutlined /> <LogoutButton /></li>
        </ul>
  </div>) || 
        (<ul style={{marginLeft: '-32px'}}>
            <li><UserOutlined /> <LoginButton /></li>
        </ul>)
  ;
};

export default LoginNav;
