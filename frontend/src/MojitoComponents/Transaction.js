import React from 'react';
import '../styles/TransactionHistory.css';
import FoodTransactionIcon from '../images/food4.png';
import StatisticsIcon from '../images/rent(blue).png';
import EntertainmentIcon from '../images/misc.png';

function categoryImage (category) {
  if (category === "entertainment") {
    return EntertainmentIcon;
  } else if (category === "finance") {
    return StatisticsIcon;
  } else if (category === "food") {
    return FoodTransactionIcon;
  }
}

const Transaction = (props) => {
  return <div className='transaction_container'>
      <div className='img_container'>
        <img style={{width: '70px', height: 'auto'}} src={categoryImage(props.category)} alt='transaction' />
      </div>

      <div className='transaction_text_container'>
          <div className='transaction_name'>
              <p>{props.title}</p>
          </div>
          <div className='transaction_date'>
              <p>{props.date}</p>
          </div>
      </div>

      <div className='transaction_amount'>
        <p>${props.price}</p>
      </div>
  </div>;
};

export default Transaction;
