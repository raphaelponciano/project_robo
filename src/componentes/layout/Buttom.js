import React, { useState } from 'react';

function Buttom({valorMinimo, valorMaximo, onValueChange}) {
  const [count, setCount] = useState(valorMinimo);

  const incrementCount = () => {
    if (count < valorMaximo) {
    setCount(count + 1);
    onValueChange(count + 1)
    }
  };

  const decrementCount = () => {
    if (count < valorMinimo) {
    setCount(count - 1);
    onValueChange(count-1)
    }
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <label>{count}</label>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default Buttom;
