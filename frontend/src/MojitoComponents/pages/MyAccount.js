import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const MyAccount = () => {
  const { user, isAuthenticated } = useAuth0();

  return(
    isAuthenticated && 
    <div>
      <h2>My Account</h2>

      <div>
        <img style={{border: '2px solid gray', margin: '10px', borderRadius: '100%'}} src={user.picture} />
        <h3>Name: {user.given_name} {user.family_name}</h3>
        <h3>Email: {user.email}</h3>
      </div>
    </div>
    )
}

export default MyAccount;
