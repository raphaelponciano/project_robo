import React, { useState } from 'react';
import Limite from '../layout/Limite';

import style from '../partes/Blindagem.module.css'


function Blindagem() {
  const [contador, setContador] = useState(0);

  const valorMaximo = () => {
    if (Limite(contador)) {
      setContador(contador + 1);
    }
  }

  const valorMinimo = () => {
    if (Limite(contador)) {
      setContador(contador - 1);
    }
  }
  
  return (
    <div className={style.blindagem.modules}>
      <p>Blindagem</p>
      <p>
      <button onClick={valorMaximo}>+</button>
      {contador}
      <button onClick={valorMinimo}>-</button>
      </p>
    </div>
  );
}

export default Blindagem;