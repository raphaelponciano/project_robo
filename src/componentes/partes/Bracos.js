import React, { useState } from 'react';

function Bracos() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 99) {
      setCount(count + 1);
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className='bracos'>
      <p>Força</p>
      <p>
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
      </p>
    </div>
  );
}

export default Bracos;