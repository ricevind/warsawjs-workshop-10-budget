import React, { Component } from 'react';

export default class TransactionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Masło',
      balanceType: 'minus',
      value: '10zł',
      paid: false
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.balanceType}: {this.state.value}</h2>
        {this.state.paid ? (<div>Paid</div>) : (<div>Not Paid</div>)}
      </div>
    )
  }
}
