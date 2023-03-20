import React, { useState } from 'react';
import style from '../partes/Blindagem.module.css'

function Blindagem() {
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
    <div className={style.blindagem.modules}>
      <p>HP</p>
      <p>
      <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>
      </p>
    </div>
  );
}

export default Blindagem;