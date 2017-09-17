import React, { Component } from 'react';
import { Input } from '../components'

export default class TransactionForm extends Component {
  constructor(props) {
    super(props)
    this.newTransaction = props.newTransaction;
    this.state = {
      description: '',
      value: '',
      category: ''
    }
    this.baseState = {...this.state};
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.newTransaction(this.state)
    this.setState(this.baseState)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
            <Input name="description" value={this.state.description} onChange={this.handleChange} />
        </label>
        <label>
          Price:
            <Input name="value" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Category:
            <Input name="category" value={this.state.category} onChange={this.handleChange} />
        </label>
        <button>Add transaction</button>
      </form>
    )
  }
}
