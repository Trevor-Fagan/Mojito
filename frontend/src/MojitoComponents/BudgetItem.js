import React from 'react'
import "../App.css";

const BudgetItem = () => {
  return (
    <div className="whole_content">
        <div className="left_content">
            <span style={{padding: "2px"}}>Work Income</span>
        </div>

        <div className="right_content">
            <div className="budget_item_amt">
                <input placeholder='0' style={{width: "80px", textAlign: "center", padding: "0px", marginTop: "0px", border: "0"}}></input>
            </div>
        </div>
    </div>
  )
}

export default BudgetItem