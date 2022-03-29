import React from 'react';
import "../../App.css";
import Transaction from '../Transaction';

const Income = () => {
  return <div className="main_content">
  <div className = 'page_header'>Income</div>

  <div style={{color: "#565656", width: "50%"}}>
    Category <span style={{marginLeft: "20px"}}>Type</span> <span style={{float: "right", marginRight: "40px"}}>Price</span>
  </div>
  
  <div style={{width: "50%"}}>
    <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
    <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="entertainment" />
    <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
    <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
    <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="food" />
    <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="finance" />
    <Transaction title="4Rivers #24234 WORKDAY" price="631.12" date="March 26" category="entertainment" />
  </div>

  </div>;
};

export default Income;
