import React from 'react';
import '../styles/SignUp.css';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

const SignUp = () => {

  return <div>
      <div className='form_container'>
        <LoginButton />
        <LogoutButton />
      </div>
  </div>;
};

export default SignUp;
