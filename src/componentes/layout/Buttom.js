import React, { useState } from 'react';

import style from "../css/GeralPartes.module.css";

function Buttom({valorMinimo, valorMaximo,  onCounterUpdate }) {
  const [count, setCount] = useState(valorMinimo);

  const incrementCount = () => {
    if (count < valorMaximo) {
    setCount(count + 1);
    onCounterUpdate(count + 1)
    }
  };

  const decrementCount = () => {
    if (count < valorMinimo) {
    setCount(count - 1);
    onCounterUpdate(count-1)
    }
  };

  return (
    <div>
    <div className={style.controle_geral}>
      <button className={style.controle_ajuste} onClick={decrementCount}>-</button>
      <label className={style.controle_contador}>{count}</label>
      <button className={style.controle_ajuste} onClick={incrementCount}>+</button>
    </div>
    
    </div>
  );
}

export default Buttom;
