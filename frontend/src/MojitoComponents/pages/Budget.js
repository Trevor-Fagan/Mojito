import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const Budget = () => {

  const data = [
    {name: "Facebook", value: 200000},
    {name: "Instagram", value: 30000},
    {name: "Yup", value: 250000}
  ]

  return <div className="main_content">
    Budget

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

  </div>;
};

export default Budget;
