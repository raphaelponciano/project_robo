import style from "../css/Estatisticas.module.css";


    
    function Atributos() {
   
    return (
        <section className={style.box_estatisticas}>
            
            <div className={style.estatistica}>
                <p className={style.estatistica_titulo}>Força</p>
                <div className={style.estatistica_valor}>
                    <p className={style.estatistica_numero}>{0}</p>
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
    )
}
export default Atributos 