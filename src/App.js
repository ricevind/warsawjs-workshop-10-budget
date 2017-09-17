import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { TransactionsList, TransactionForm } from './components'
class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [
        {
          id: 3,
          description: 'Potwierdzenie uczestnictwa w warsztatach WarsawJS',
          value: 20,
          date: '16.09.2017',
          category: 'Edukacja'
        },
        {
          id: 2,
          description: 'Bilet na pociąg',
          value: 120,
          date: '07.09.2017',
          category: 'Transport'
        },
        {
          id: 1,
          description: 'Części do samochodu',
          value: 430,
          date: '26.08.2017',
          category: 'Samochód'
        }
      ]
    }
  }

  newTransaction = (transaction) => {
    const id = this.state.transactions[0] ? this.state.transactions[0].id + 1 : 1;
    const date = Date.now();
    this.setState({
      transactions: [{...transaction, id, date}, ...this.state.transactions]
    })
  }

  removeItem = (id) => {
    this.setState((oldState, _) => {
      const filteredTransactions = oldState.transactions.filter(transaction => transaction.id !== id);
      return {transactions: filteredTransactions};
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TransactionForm newTransaction={this.newTransaction}/>
        <TransactionsList transactions={this.state.transactions} removeFunction={this.removeItem} />
      </div>
    );
  }
}

export default App;
