import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TransactionCard extends Component {
  render() {
    const { item: { id, description, name, date, category, value, paid }, whenClick } = this.props;
    return (
      <div>
        <h1>{description}</h1>
        <h2>{category}: {value}</h2>
        {paid ? (<div>Paid</div>) : (<div>Not Paid</div>)}
        <button onClick={() => whenClick(id)}>Remove</button>
        <span>{date}</span>
      </div>
    )
  }
}

TransactionCard.propTypes = {
  item: PropTypes.object.isRequired
}
