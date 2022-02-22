import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
<<<<<<< HEAD:frontend/src/MojitoComponents/LoginNav.js
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
=======
import LogoutButton from '../MojitoComponents/LogoutButton';
import LoginButton from '../MojitoComponents/LoginButton';
>>>>>>> 79698f64a888456925b1952c16137531c4d24c77:client/src/components/LoginNav.js

const LoginNav = () => {
  const { isAuthenticated } = useAuth0();

  return (isAuthenticated && <div>
<<<<<<< HEAD:frontend/src/MojitoComponents/LoginNav.js
      <ul style={{marginLeft: '-32px'}}>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/my_account'><UserOutlined /><span className='text_icon_padding'>My Account</span></NavLink></li>
          <li><LogoutOutlined /> <LogoutButton /></li>
=======
      <ul>
          <li><NavLink activeStyle={{color: '#FFF'}} to='/my_account'><span className='text_icon_padding'>My Account</span></NavLink></li>
          <li><LogoutButton /></li>
>>>>>>> 79698f64a888456925b1952c16137531c4d24c77:client/src/components/LoginNav.js
        </ul>
  </div>) || 
        (<ul>
            <li><LoginButton /></li>
        </ul>)
  ;
};

export default LoginNav;
