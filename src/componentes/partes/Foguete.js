import React, { useState } from 'react';
import Limite from '../layout/Limite';

import style from '../partes/Blindagem.module.css';
import style2 from '../partes/GeralPartes.module.css';


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
    <div id={style.foguete_container} className={ style2.mainPartes_container}>
      
      <div clasName={style.equipamento_container}>
        
        <label className={style2.peca_titulo}>Foguete</label>
        
        <div className={style2.controle_geral}>
          <button className={style2.controle_ajuste} onClick={valorMaximo}>+</button>
          <input type="text" className={style2.controle_contador} value="00" />
          <button className={style2.controle_ajuste} onClick={valorMinimo}>-</button>
        </div>
      
      </div>
      
      <hr className={style2.linha}></hr>
    </div>
  );
}

export default Blindagem;