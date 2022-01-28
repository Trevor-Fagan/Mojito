import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Account = () => {
  const { user, isAuthenticated } = useAuth0();

  return(
    isAuthenticated && 
    <div>
      <h2>My Account</h2>

      <img src={user.picture} />
      <h3>Name: {user.given_name} {user.family_name}</h3>
      <h3>Email: {user.email}</h3>
      <h1>Hey</h1>
    </div>
    )
}

export default Account;
