import React from 'react';

import Bracos from '../componentes/partes/Bracos';
import Blindagem from '../componentes/partes/Blindagem';
import Pernas from '../componentes/partes/Pernas';
import Foguete from '../componentes/partes/Foguete';

import Estatisticas from '../componentes/layout/Estatisticas';

import styles from './Home.module.css';



function Home () {


return (
  <section className={styles.home_container}>
    <div>
    <Estatisticas/>
    <Bracos/>    
    <Blindagem/>
    <Pernas/>
    <Foguete/>
    </div>
  </section>
)
}

export default Home