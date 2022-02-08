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
              <p>AMZ Purchase *420AGSJ4</p>
          </div>
          <div className='transaction_date'>
              <p>January 28th</p>
          </div>
      </div>

      <div className='transaction_amount'>
        <p>$5.73</p>
      </div>
  </div>;
};

export default Transaction;
