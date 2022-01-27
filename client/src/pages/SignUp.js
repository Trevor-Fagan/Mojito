import React from 'react';
import '../styles/SignUp.css';

const SignUp = () => {
  return <div>
      <div className='form_container'>
        <form>
            <h2>Sign Up</h2>

            <h3>Full Name</h3>
            <input className='text_input' type='text' placeholder='your name...'></input>

            <h3>Username</h3>
            <input className='text_input' type='text' placeholder='username...'></input>

            <h3>Email</h3>
            <input className='text_input' type='text' placeholder='email...'></input>

            <h3>Password</h3>
            <input className='text_input' type='text' placeholder='password...'></input>

            <br />
            <input className='submit_input' type='submit' value='Submit' />
        </form>
      </div>
  </div>;
};

export default SignUp;
