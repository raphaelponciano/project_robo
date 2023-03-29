import React, { useState } from 'react';
import style2 from '../partes/GeralPartes.module.css';

function Buttom() {
  const Maximo = 99;
  const Minimo = 0;

  const [contador, setContador] = useState(0);

  const valorMaximo = () => {
    if (contador < Maximo) {
      setContador(contador + 1);
    }
  }

  const valorMinimo = () => {
    if (contador > Minimo) {
      setContador(contador - 1);
    }
  }

  return (
    <div id={style.blindagem_container} className={ style2.mainPartes_container}>
      
      <div clasName={style.equipamento_container}>
        
        <label className={style2.peca_titulo}>Blindagem</label>
        
        <div className={style2.controle_geral}>
          <button className={style2.controle_ajuste} onClick={valorMaximo}>+</button>
          <input type="text" className={style2.controle_contador} value={contador} />
          <button className={style2.controle_ajuste} onClick={valorMinimo}>-</button>
        </div>
      
      </div>
 </div>
)
} export default Buttom