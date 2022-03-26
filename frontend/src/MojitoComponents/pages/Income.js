import React from 'react';
import "../../App.css";
import Transaction from '../Transaction';

const Income = () => {
  return <div className="main_content">
    <div className='page_header'>Income</div>

    <div style={{color: "#565656"}}>
      Category <span style={{marginLeft: "20px"}}>Type</span> <span style={{float: "right", marginRight: "40px"}}>Price</span>
    </div>

    <Transaction title="4Rivers #28754 WORKDAY" price="623.45" date="June, 23rd" category="finance" />
    <Transaction title="4Rivers #28754 WORKDAY" price="623.45" date="June, 23rd" category="finance" />
    <Transaction title="4Rivers #28754 WORKDAY" price="623.45" date="June, 23rd" category="finance" />
    <Transaction title="4Rivers #28754 WORKDAY" price="623.45" date="June, 23rd" category="finance" />
    <Transaction title="4Rivers #28754 WORKDAY" price="623.45" date="June, 23rd" category="finance" />
    <Transaction title="4Rivers #28754 WORKDAY" price="623.45" date="June, 23rd" category="finance" />
    <Transaction title="4Rivers #28754 WORKDAY" price="623.45" date="June, 23rd" category="finance" />
    <Transaction title="4Rivers #28754 WORKDAY" price="623.45" date="June, 23rd" category="finance" />

  </div>;
};

export default Income;
