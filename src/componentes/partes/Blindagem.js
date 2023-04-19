import React from "react"
import Buttom from "../layout/Buttom"
import style from "../css/GeralPartes.module.css"



function Blindagem(props) {
  const { valorMaximo, valorMinimo, valorBlindagem } = props;
  
  return (
    <div>
      <div className={style.mainPartes_container}>
        <div>
          <label className={style.peca_titulo}>Blindagem</label>
        </div>
        <div>
          <Buttom  valorMinimo={valorMinimo} 
          valorMaximo={valorMaximo} 
          valorBlindagem={valorBlindagem}
          />
        </div>
      </div>
      <hr className={style.linha} />
    </div>

  )
}
export default Blindagem
