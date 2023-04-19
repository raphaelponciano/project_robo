import React from "react"
import Buttom from "../layout/Buttom"
import style from "../css/GeralPartes.module.css"



function Pernas(props) {
  const { valorMaximo, valorMinimo, valorPerna } = props;

  return (
    <div>
      <div className={style.mainPartes_container}>
        <div>
          <label className={style.peca_titulo}>Pernas</label>
        </div>
        <div>
          <Buttom valorMinimo={valorMinimo}
            valorMaximo={valorMaximo}
            valorPerna={valorPerna}
          />
        </div>
      </div>
      <hr className={style.linha} />
    </div>
  )
}
export default Pernas
