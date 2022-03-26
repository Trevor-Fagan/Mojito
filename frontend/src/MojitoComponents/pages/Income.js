import React from 'react';
import "../../App.css";
import Transaction from '../Transaction';

const Income = () => {
  return <div className="main_content">
  <div className = 'page_header'>Income</div>

  <div style={{color: "#565656"}}>
    Category <span style={{marginLeft: "20px"}}>Type</span> <span style={{float: "right", marginRight: "40px"}}>Price</span>
  </div>
  
  <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
  <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
  <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
  <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
  <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
  <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
  <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
  <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
  </div>;
};

export default Income;
