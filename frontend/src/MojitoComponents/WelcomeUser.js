import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const WelcomeUser = () => {
    const { user, isAuthenticated } = useAuth0();

    return ((isAuthenticated && <p className='selected'>Welcome, {user.given_name}!</p>))
  }

export default WelcomeUser;
