import React from 'react';
import { useState } from 'react';
import { Link as PageLink } from 'react-router-dom';
import Transaction from './Transaction';
import '../styles/Dashboard.css'
import { PieChart, Pie, Tooltip } from 'recharts';
import BudgetItem from '../MojitoComponents/BudgetItem';
import { Modal, Button } from 'react-bootstrap';

class Dashboard extends React.Component {
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
  }

  render () {
   
    const data = [
      {name: "Housing", value: this.state.apiResponse.Housing},
      {name: "Entertainment", value: this.state.apiResponse.Entertainment},
      {name: "Vacation", value: this.state.apiResponse.Vacation},
      {name: "Car", value: this.state.apiResponse.Car},
      {name: "Clothing", value: this.state.apiResponse.Clothing},
      {name: "Misc", value: this.state.apiResponse.Misc},
      {name: "Income", value: this.state.apiResponse.Income}
    ]

    {this.state.totalExpenses = this.state.apiResponse.Housing + this.state.apiResponse.Entertainment +
      this.state.apiResponse.Vacation + this.state.apiResponse.Car +
      this.state.apiResponse.Clothing + this.state.apiResponse.Misc}

    return <div className='dashboard main_content'>
      <div className='overview_bar'>
        <h2>Welcome</h2>
      </div>

      <div className="col-8" style={{float: "left"}}>
        <div className="row">
          <PageLink className='widget_header' to='/budget'>
                <div className='widget_panel your_budget top_widget_panel'>
                  <h3>Your Budget</h3>

                  <div className="budget_left">
                    <h4 className="amount_remaining" style={{color: this.state.apiResponse.Income - this.state.totalExpenses > 0 ? "green" : "red" }}>{this.state.apiResponse.Income - this.state.totalExpenses}</h4>  

                    <PieChart width={400} height={300}>
                        <Pie
                          dataKey="value"
                          isAnimationActive={false}
                          data={data}
                          cx={190}
                          cy={140}
                          outerRadius={100}
                          fill="#8884d8"
                          label
                        />
                        <Tooltip />
                      </PieChart>
                  </div>

                  <div className="budget_right">
                    <div>
                    Category:  <span style={{float: "right", marginRight: "20px"}}>Amount:</span>
                    </div>

                    <div style={{marginTop: "20px"}}>
                      <BudgetItem category="Housing" amount={this.state.apiResponse.Housing} />
                      <BudgetItem category="Entertainment" amount={this.state.apiResponse.Entertainment} />
                      <BudgetItem category="Vacation" amount={this.state.apiResponse.Vacation} />
                      <BudgetItem category="Car" amount={this.state.apiResponse.Car} />
                      <BudgetItem category="Clothing" amount={this.state.apiResponse.Clothing} />
                      <BudgetItem category="Misc" amount={this.state.apiResponse.Misc}/>
                      <BudgetItem category="Income" amount={this.state.apiResponse.Income} />
                    </div>
                  </div>
          
                </div>
          </PageLink>
        </div>

        <div className="row">
          <div className="col-6">
            <PageLink className='widget_header' to='/expenses'>
                <div className='widget_panel' style={{margin: "1em"}}>
                    <h3>Expenses</h3>
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

          <div className="col-6">
            <PageLink className='widget_header' to='/income'>
                  <div className='widget_panel top_widget_panel' style={{margin: "1em"}}>
                      <h3>Income</h3>
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
        </div>
      </div>

      <div className="col-4" style={{float: "left"}}>
          <PageLink className='widget_header' to= '/transaction_history'>
                <div className='widget_panel transaction_history'>
                  <h3 style={{float: "left"}}>Transaction History</h3>

                  {/* <Button variant="success" onClick={handleShow} style={{float: "right", marginTop: "-6px"}}>
                    +
                  </Button> */}

                  {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal> */}

                  <div style={{width: "100%", marginTop: "60px"}}>
                  <p style={{float: "left", paddingLeft: "0px", color: "#9A9A9A"}}>Category:</p>
                    <p style={{float: "left", paddingLeft: "120px", color: "#9A9A9A"}}>Type:</p>
                    <p style={{float: "right", paddingRight: "40px", color: "#9A9A9A"}}>Price:</p>
                  </div>

                  <div style={{marginTop: "100px", float: "clear"}}>

                  </div>

                  <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="entertainment" />
                  <Transaction title="TARGET 103 #523" price="5.73" date="May 27th" category="finance" />
                  <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="food" />
                  <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="finance" />
                  <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="entertainment" />
                  <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="food" />
                  <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="food" />
                </div>
          </PageLink>
      </div>
    </div>;
  }
};

export default Dashboard;
