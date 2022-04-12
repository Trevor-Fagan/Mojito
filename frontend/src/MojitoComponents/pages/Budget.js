import React from "react";
import { useEffect } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { Button, Card } from "react-bootstrap";
import "../../App.css";
import BudgetItem from "../BudgetItem";
import { render } from "@testing-library/react";

const Budget = () => {

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = () => {
    fetch("http://localhost:8000/backend/budget")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: JSON.parse(res) }));

    fetch("http://localhost:8000/backend/user")
      .then((res) => res.text())
      .then((res) => this.setState({ secondResponse: JSON.parse(res) }));
  };

  const data = [
    { name: "Facebook", value: 200000 },
    { name: "Instagram", value: 30000 },
    { name: "Yup", value: 250000 },
  ];

  return (
    <div className="main_content">
      <div className="page_header">Budget</div>

      <Card style={{ width: "49%", minHeight: "800px", float: "left" }}>
        <Card.Body>
          <Card.Title>Your Budget</Card.Title>
          <Button className="btn btn-success">Save</Button>
          <Card.Text>
            <BudgetItem category="Housing" amount={49} />
            <BudgetItem category="Entertainment" amount={49} />
            <BudgetItem category="Vacation" amount={49} />
            <BudgetItem category="Car" amount={49} />
            <BudgetItem category="Clothing" amount={49} />
            <BudgetItem category="Misc" amount={49} />
            <BudgetItem category="Income" amount={49} />
          </Card.Text>
        </Card.Body>
      </Card>

      <div style={{ width: "49%", float: "left", marginLeft: "2%" }}>
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
    </div>
  );
};

export default Budget;
