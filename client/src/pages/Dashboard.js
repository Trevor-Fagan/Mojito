import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'
import MyChart from '../components/MyChart';
import Transaction from '../components/Transaction';

const Dashboard = () => {
  return <div className='dashboard w-full'>
    <div className='overview_bar w-full'>
      <h2>Overview</h2>

      <a href='/'><PlusCircleOutlined style={{ color: '#21883B'}}/></a>
    </div>

      <div className='col_one lg:w-4/6 md:w-full'>
        <Link to='/budget'>
        <div className='widget_panel your_budget top_widget_panel'>
          <h3>Your Budget</h3>
        </div>
        </Link>

        <Link to= '/transaction_history'>
          <div className='widget_panel transaction_history'>
            <h3>Transaction History</h3>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </Link>
      </div>


    <div className='col_two lg:w-2/6 md:w-full'>
        <Link to='/income'>
          <div className='widget_panel income h-2/6 top_widget_panel'>
              <h3>Income</h3>
              <MyChart />
          </div>
        </Link>

        <Link to='/expenses'>
          <div className='widget_panel expenses h-2/6'>
              <h3>Expenses</h3>
              <MyChart />
          </div>
        </Link>

        <Link to='/investments'>
          <div className='widget_panel investments h-2/6'>
              <h3>Investments</h3>
              <MyChart />
          </div>
        </Link>
    </div>
    

  </div>;
};

export default Dashboard;
