import style from "../css/Estatisticas.module.css";
import React, { useEffect, useState } from "react";




function Atributos(props) {
    const { count } = props;
  const [forca, setForca] = useState(0);
  const [agilidade, setAgilidade] = useState(0);

  useEffect(() => {
    setForca(count * 10);
    setAgilidade(count * 5);
  }, [count]);
        
    return (
        <div>
           <section className={style.box_estatisticas}>

                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Força</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{forca}</p>
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
                        <p className={style.estatistica_numero}>{agilidade ?? 0}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Atributos 