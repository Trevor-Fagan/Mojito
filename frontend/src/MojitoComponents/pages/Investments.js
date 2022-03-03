import React from 'react';
import { BarChart, LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Bar, Legend } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const Investments = () => {
  return(
  <div>
    <h2>Investments !</h2>

    <ResponsiveContainer width="50%" aspect={2}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar datakey="pv" fill="#222" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  );
};

export default Investments;
