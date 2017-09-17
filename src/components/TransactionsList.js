import React from 'react';
import PropTypes from 'prop-types';
import { TransactionCard } from '../components';

function TransactionsList({ transactions, removeFunction }) {
  return (
    <div>
      {transactions.map((transaction) =>
        <TransactionCard whenClick={removeFunction} item={transaction} key={transaction.id} />
      )}
    </div>
  )
}

TransactionsList.propsType = {
  transactions: PropTypes.array
}
export default TransactionsList;

