import React from "react"
import Buttom from "../layout/Buttom"
import style from "../css/GeralPartes.module.css"



function Foguete(props) {
  const { valorMaximo, valorMinimo, valorFoguete } = props;

  return (
    <div>
      <div className={style.mainPartes_container}>
        <div>
          <label className={style.peca_titulo}>Foguete</label>
        </div>
        <div>
          <Buttom valorMinimo={valorMinimo}
            valorMaximo={valorMaximo}
            valorFoguete={valorFoguete}
          />
        </div>
      </div>
      <hr className={style.linha} />
    </div>
  )
}
export default Foguete
