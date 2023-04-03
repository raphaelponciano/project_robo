import style from "../css/Estatisticas.module.css";
import React, { useState } from "react";
import Buttom from "./Buttom";
    
    function Atributos() {
        const [atributos, setAtributos] = useState({
          forca: 0,
          agilidade: 0,
          velocidade: 0,
          poder: 0,
          energia: 0
        });
      
        const handleCountUpdate = (counterValue) => {
          setAtributos({
            forca: counterValue * 2,
            agilidade: counterValue * 3,
            velocidade: counterValue * 4
          });
        };
    
    return (
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
                    <p className={style.estatistica_numero}>{atributos.poder}</p>
                </div>
            </div>
            <div className={style.estatistica}>
                <p className={style.estatistica_titulo}>Energia</p>
                <div className={style.estatistica_valor}>
                    <p className={style.estatistica_numero}>{atributos.energia}</p>
                </div>
            </div>
            <div className={style.estatistica}>
                <p className={style.estatistica_titulo}>Velocidade</p>
                <div className={style.estatistica_valor}>
                    <p className={style.estatistica_numero}>{atributos.velocidade}</p>
                </div>
            </div>
            <div className={style.estatistica}>
                <p className={style.estatistica_titulo}>Agilidade</p>
                <div className={style.estatistica_valor}>
                    <p className={style.estatistica_numero}>{atributos.agilidade}</p>
                </div>
                </div>
        </section>
    )
}
export default Atributos 