import React from 'react';
import Montagem from './Montagem';
import robotron from "../componentes/img/robotron.png"
import style from "./Main.module.css"

function Main () {
return (
<div className={style.main_container}>

    <section className={style.robotron}>
            <img className={style.robo} src={robotron.png} alt="Robotron"/>
            <figcaption className={style.titulo}>ROBOTRON <br/>2000</figcaption>
            <Montagem/>
        </section>
</div>
        )
}
export default Main