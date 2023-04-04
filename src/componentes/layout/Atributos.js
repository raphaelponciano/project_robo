import style from "../css/Estatisticas.module.css";
import React, { useState } from "react";




function Atributos({ count }) {
    const [atributos, setAtributos] = useState({
      forca: count * 2,
      agilidade: count * 3,
      velocidade: count * 4
    });
  
    return (
        <div>
           <section className={style.box_estatisticas}>

                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Força</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{atributos.forca}</p>
                    </div>
                </div>
                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Poder</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{0}</p>
                    </div>
                </div>
                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Energia</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{0}</p>
                    </div>
                </div>
                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Velocidade</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{0}</p>
                    </div>
                </div>
                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Agilidade</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{0}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Atributos 