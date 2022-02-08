import React from 'react';
import { Link as PageLink } from 'react-router-dom';
import Link from '../Components/Link';
import '../styles/Dashboard.css'

const Dashboard = () => {
  return <div className='dashboard .container-fluid py-3'>
    <div className='overview_bar'>
      <h2>Overview</h2>
      <a href='/'></a>
    </div>

    <div className='row'>
      <div className='col-8'>
        <div className='row'>
            <PageLink to='/budget'>
            <div className='widget_panel your_budget top_widget_panel'>
              <h3>Your Budget</h3>
              <Link />
            </div>
            </PageLink>
        </div>
        <div className='row'>
          <PageLink to= '/transaction_history'>
            <div className='widget_panel transaction_history'>
              <h3>Transaction History</h3>
            </div>
          </PageLink>
        </div>
      </div>

      <div className='col-4'>
        <div className='row'>
          <PageLink to='/income'>
              <div className='widget_panel income h-2/6 top_widget_panel'>
                  <h3>Income</h3>
              </div>
          </PageLink>
        </div>
        <div className='row'>
          <PageLink to='/expenses'>
            <div className='widget_panel expenses h-2/6'>
                <h3>Expenses</h3>
            </div>
          </PageLink>
        </div>
        <div className='row'>
          <PageLink to='/investments'>
            <div className='widget_panel investments h-2/6'>
                <h3>Investments</h3>
            </div>
          </PageLink>
        </div>
      </div>
    </div>
  </div>;
};

export default Dashboard;
