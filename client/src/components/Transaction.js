import React from 'react';
import '../styles/TransactionHistory.css';
import FoodTransactionIcon from '../images/food.png';

const Transaction = () => {
  return <div className='transaction_container'>
      <div className='img_container'>
        <img style={{width: '70px', height: 'auto'}} src={FoodTransactionIcon} alt='transaction' />
      </div>

      <div className='transaction_text_container'>
          <div className='transaction_name'>
              <h3>AMZ Purchase *420AGSJ4</h3>
          </div>
          <div className='transaction_date'>
              <h3>January 28th</h3>
          </div>
      </div>

      <div className='transaction_amount'>
        <h3>$5.73</h3>
      </div>
  </div>;
};

export default Transaction;
