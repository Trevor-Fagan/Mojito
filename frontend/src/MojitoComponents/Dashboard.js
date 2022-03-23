import React from 'react';
import { Link as PageLink } from 'react-router-dom';
import Link from '../Components/Link';
import Transaction from './Transaction';
import '../styles/Dashboard.css'
import { PieChart, Pie, Tooltip } from 'recharts';

const Dashboard = () => {
  const data = [
    {name: "Facebook", value: 200000},
    {name: "Instagram", value: 30000},
    {name: "Yup", value: 250000}
  ]

  return <div className='dashboard .container-fluid py-3 main_content'>
    <div className='overview_bar'>
      <h2>Overview</h2>
    </div>

    <div className='row'>
      <div className='col-8'>
        <div className='row'>
            <PageLink className='widget_header' to='/budget'>
              <div className='widget_panel your_budget top_widget_panel'>
                <h3>Your Budget</h3>

                <div style={{width: "80px", height: '30px'}}>
                  <Link />
                </div>
              </div>
            </PageLink>
        </div>
        <div className='row'>
          <PageLink className='widget_header' to= '/transaction_history'>
            <div className='widget_panel transaction_history'>
              <h3>Transaction History</h3>
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
            </div>
          </PageLink>
        </div>
      </div>

      <div className='col-4'>
        <div className='row'>
          <PageLink className='widget_header' to='/income'>
              <div className='widget_panel top_widget_panel'>
                  <h3>Income</h3>'
                    <PieChart width={300} height={300}>
                        <Pie
                          dataKey="value"
                          isAnimationActive={false}
                          data={data}
                          cx={210}
                          cy={140}
                          outerRadius={80}
                          fill="#8884d8"
                          label
                        />
                        <Tooltip />
                    </PieChart>
              </div>
          </PageLink>
        </div>
        <div className='row'>
          <PageLink className='widget_header' to='/expenses'>
            <div className='widget_panel'>
                <h3>Expenses</h3>
            </div>
          </PageLink>
        </div>
        <div className='row'>
          <PageLink className='widget_header' to='/investments'>
            <div className='widget_panel investments'>
                <h3>Investments</h3>
            </div>
          </PageLink>
        </div>
      </div>
    </div>
  </div>;
};

export default Dashboard;
