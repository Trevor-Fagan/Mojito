import React from 'react';
import { LineChart, Line } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

const Investments = () => {
  return(
  <div>
    <h2>Investments</h2>

    <p>This is the investments page</p>
  </div>
  );
};

export default Investments;
