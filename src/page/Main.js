import React from 'react';
import Montagem from './Montagem';
import robotron from "../componentes/img/robotron.png"
import style from "./Main.module.css"

function Main () {
return (
<div className={style.main_container}>

    <section className={style.robotron}>
            
            <figcaption className={style.titulo}>Project Robo<br/>2000</figcaption>
            <Montagem/>
        </section>
</div>
        )
}
export default Main