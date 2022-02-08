import React from 'react';

class TransactionHistory extends React.Component {

  async componentDidMount() {
    const response = await fetch('/api/transactions')
    const data = await response.json();
    this.setState({person: data.transactions[0], loading: false});
    for (let i = 0; i < data.accounts.length; i++) {
      console.log(data.transactions[i]);
    }
  }

  render() {
    return(
      <div>
        
      </div>
    );
  }
};

export default TransactionHistory;
