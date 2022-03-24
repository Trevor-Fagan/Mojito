import React from 'react';
import { useState } from 'react';
import { Link as PageLink } from 'react-router-dom';
import Transaction from './Transaction';
import '../styles/Dashboard.css'
import { PieChart, Pie, Tooltip } from 'recharts';
import BudgetItem from '../MojitoComponents/BudgetItem';
import { Modal, Button } from 'react-bootstrap';

const Dashboard = () => {
  const data = [
    {name: "Facebook", value: 200000},
    {name: "Instagram", value: 30000},
    {name: "Yup", value: 250000}
  ]

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <h4 className="amount_remaining">2000</h4>  
                </div>

                <div className="budget_right">
                  <BudgetItem />
                  <BudgetItem />
                  <BudgetItem />
                  <BudgetItem />
                  <BudgetItem />
                  <BudgetItem />
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

                <Button variant="success" onClick={handleShow} style={{float: "right", marginTop: "-6px"}}>
                  +
                </Button>

                <Modal show={show} onHide={handleClose}>
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
                </Modal>

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
};

export default Dashboard;
