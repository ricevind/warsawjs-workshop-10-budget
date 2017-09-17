import React from 'react';

function Input({type ='text', ...others}) {
  return (
    <input type={type} {...others} />
  )
}

export default Input;