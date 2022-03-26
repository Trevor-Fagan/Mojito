import React from 'react';
import Transaction from '../Transaction';
import "../../App.css";
import { Modal, Button } from 'react-bootstrap';

class TransactionHistory extends React.Component {
  render() {
    return(
      <div className="main_content">
        <h2 className="page_header">Transaction History</h2>

        <div style={{color: "#565656", width: "50%"}}>
          Category <span style={{marginLeft: "20px"}}>Type</span> <span style={{float: "right", marginRight: "36px"}}>Price</span>
        </div>

        <div style={{width: "50%", float: "left"}}>
          <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="entertainment" />
          <Transaction title="TARGET 103 #523" price="5.73" date="May 27th" category="finance" />
          <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="food" />
          <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="finance" />
          <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="entertainment" />
          <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="food" />
          <Transaction title="AMZ Purchase #428092" price="5.73" date="May 23rd" category="food" />
        </div>
      </div>
    );
  }
};

export default TransactionHistory;
