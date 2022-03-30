import React from 'react'
import "../App.css";

const BudgetItem = (props) => {
  return (
    <div className="whole_content">
        <div className="left_content">
            <span style={{padding: "2px"}}>{props.category}</span>
        </div>

        <div className="right_content">
            <div className="budget_item_amt">
                <input placeholder={props.amount} style={{width: "80px", textAlign: "center", padding: "0px", marginTop: "0px", border: "0"}}></input>
            </div>
        </div>
    </div>
  )
}

export default BudgetItem