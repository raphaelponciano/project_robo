import React from "react"
import Buttom from "../layout/Buttom"
import style from "../css/GeralPartes.module.css"



function Bracos(props) {
  const { valorMaximo, valorMinimo, atualizaValor } = props;
  return (
    <div>
      <div className={style.mainPartes_container}>
        <div>
          <label className={style.peca_titulo}>Braços</label>
        </div>
        <div>
          <Buttom valorMinimo={valorMinimo}
            valorMaximo={valorMaximo}
            atualizaValor={atualizaValor}
          />
        </div>
      </div>
      <hr className={style.linha} />
    </div>
  )
}
export default Bracos
