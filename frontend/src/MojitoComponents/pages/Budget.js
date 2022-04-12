import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import { Button, Card } from "react-bootstrap";
import "../../App.css";
import BudgetItem from '../BudgetItem';

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state={apiResponse: "", secondResponse: ""}
  }

  callAPI () {
    fetch("http://localhost:8000/backend/budget")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: JSON.parse(res)}))
    
    fetch("http://localhost:8000/backend/user")
      .then(res => res.text())
      .then(res => this.setState({secondResponse: JSON.parse(res)}))
  }

  componentWillMount () {
    this.callAPI();
    console.log(this.callAPI());
  }

  render() {
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
        <Button className='btn btn-success'>Save</Button>
        <Card.Text>
          <BudgetItem category="Housing" amount={this.state.apiResponse.Housing} />
          <BudgetItem category="Entertainment" amount={this.state.apiResponse.Entertainment} />
          <BudgetItem category="Vacation" amount={this.state.apiResponse.Vacation} />
          <BudgetItem category="Car" amount={this.state.apiResponse.Car} />
          <BudgetItem category="Clothing" amount={this.state.apiResponse.Clothing} />
          <BudgetItem category="Misc" amount={this.state.apiResponse.Misc}/>
          <BudgetItem category="Income" amount={this.state.apiResponse.Income} />
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
  }
};

export default Budget;
