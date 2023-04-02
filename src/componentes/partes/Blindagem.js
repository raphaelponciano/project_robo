import React from "react"
import Buttom from "../layout/Buttom"
import style from "../css/GeralPartes.module.css"



function Blindagem() {
  return (
    <div>
      <div className={style.mainPartes_container}>
        <div>
          <label className={style.peca_titulo}>Blindagem</label>
        </div>
        <div>
          <Buttom valorMinimo={10} valorMaximo={15} />
        </div>
      </div>
      <hr className={style.linha} />
    </div>

  )
}
export default Blindagem
