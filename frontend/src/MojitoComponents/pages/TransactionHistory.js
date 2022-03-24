import React from 'react';
import Transaction from '../Transaction';
import "../../App.css";

class TransactionHistory extends React.Component {
  render() {
    return(
      <div className="main_content">
        <h2 className="page_header">Transaction History</h2>

        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />

      </div>
    );
  }
};

export default TransactionHistory;
