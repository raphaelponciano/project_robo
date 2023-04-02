import React from "react"
import Buttom from "../layout/Buttom"
import style from "../css/GeralPartes.module.css"



function Foguete() {
  return (
    <div>
      <div className={style.mainPartes_container}>
        <div>
          <label className={style.peca_titulo}>Foguete</label>
        </div>
        <div>
          <Buttom valorMinimo={10} valorMaximo={15} />
        </div>
      </div>
      <hr className={style.linha} />
    </div>
  )
}
export default Foguete
