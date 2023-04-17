import React, { useState } from 'react';

import style from "../css/GeralPartes.module.css";


function Buttom(props) {
  const { valorMaximo, valorMinimo, atualizaValor } = props;
  const [count, setCount] = useState(valorMinimo);

  const aumentaValor = () => {
    if (count < valorMaximo) {
      setCount(count + 1);
      atualizaValor(count + 1)
    }
  };

  const diminuiValor = () => {
    if (count > valorMinimo) {
      setCount(count - 1);
      atualizaValor(count - 1)
    }
  };



   return (
    <div>
    <div className={style.controle_geral}>
      <button className={style.controle_ajuste} onClick={diminuiValor}>-</button>
      <label className={style.controle_contador}>{count}</label>
      <button className={style.controle_ajuste} onClick={aumentaValor}>+</button>
      
    </div>
    </div>
  );
}

export default Buttom;
