import React from 'react';

import Bracos from '../componentes/partes/Bracos';
import Blindagem from '../componentes/partes/Blindagem';
import Pernas from '../componentes/partes/Pernas';
import Foguete from '../componentes/partes/Foguete';

import Estatisticas from '../componentes/layout/Estatisticas';

import styles from './Home.module.css';



function Home() {


  return (
    <section className={styles.home_container}>
      <image src={'../componentes/img/robotron.png'} />

      <div className={styles.estatisticas_container}>
        <Estatisticas />
      </div>
      <div className={styles.partes_container}>
        <div className={styles.ajusteOpcoes_container}>
          <Bracos />
        </div>
        <div className={styles.ajusteOpcoes_container}>
          <Blindagem />
        </div>
        <div className={styles.ajusteOpcoes_container}>
          <Pernas />
        </div>
        <div className={styles.ajusteOpcoes_container}>
          <Foguete />
        </div>
      </div>
    </section >
  )
}

export default Home