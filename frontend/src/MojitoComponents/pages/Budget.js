import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const Budget = () => {

  const data = [
    {name: "Facebook", value: 200000},
    {name: "Instagram", value: 30000},
    {name: "Yup", value: 250000}
  ]

  return <div className="main_content">
    Testing Charts

      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
      </PieChart>

      <div style={{width: '200px', height: '200px', backgroundColor: "red"}}></div>
      <div style={{width: '200px', height: '200px', backgroundColor: "red"}}></div>
      <div style={{width: '200px', height: '200px', backgroundColor: "red"}}></div>
      <div style={{width: '200px', height: '200px', backgroundColor: "red"}}></div>
      <div style={{width: '200px', height: '200px', backgroundColor: "red"}}></div>

  </div>;
};

export default Budget;
