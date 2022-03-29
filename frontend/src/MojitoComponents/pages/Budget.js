import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import { Card } from "react-bootstrap";
import "../../App.css";
import BudgetItem from '../BudgetItem';

const Budget = () => {

  const data = [
    {name: "Facebook", value: 200000},
    {name: "Instagram", value: 30000},
    {name: "Yup", value: 250000}
  ]

  return <div className="main_content">
    <div className = 'page_header'>Budget</div>

    <Card style={{ width: "49%", minHeight: "800px", float: "left"}}>
      <Card.Body>
        <Card.Title>Your Budget</Card.Title>
        <Card.Text>
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
          <BudgetItem />
        </Card.Text>
      </Card.Body>
    </Card>

    <div style={{width: "49%", float: "left", marginLeft: "2%"}}>
      <PieChart PieChart width={800} height={800}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={370}
            cy={400}
            outerRadius={220}
            fill="#8884d8"
            label
          />
          <Tooltip />
      </PieChart>
    </div>

  </div>;
};

export default Budget;
