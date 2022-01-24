import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (<div>
    <div className='logo'>
      Mojito
    </div>

    <ul>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/budget'>Budget</Link>
      <Link to='/transaction_history'>Transaction History</Link>
      <Link to='/expenses'>Expenses</Link>
      <Link to='/investments'>Investments</Link>
      <Link to='/spedning_analyzer'>Spending Analyzer</Link>
    </ul>

    <div className='account_info'>
      <p>Welcome, Trevor!</p>
      <Link to='/my_account'>My Account</Link>
      <Link to='/sign_out'>Sign Out</Link>
    </div>
  </div>);
};

export default Sidebar;
