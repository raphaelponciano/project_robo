import Blindagem from "../partes/Blindagem";
import Atributos from "../layout/Atributos";
import style from "./Montagem.module.css";
import Bracos from "../partes/Bracos";
import Foguete from "../partes/Foguete";
import Pernas from "../partes/Pernas";


import React, { useState } from "react";

function Montagem() {
    const [count, setCount] = useState(0);
    const [newValorBlindagem, setNewValorBlindagem] = useState(0);

    const valorBlindagem = (blindagemValor) => {
        setNewValorBlindagem(blindagemValor);
    };
    const valorBraco = (valor) => {
        setCount(valor);
    };
    const valorPerna = (valor) => {
        setCount(valor);
    };
    const valorFoguete = (valor) => {
        setCount(valor);
    };

    return (
        <div className={style.montagem_container}>
            <div>

                <div className={style.partes_container}>
                    <div>
                        <Blindagem
                            valorMaximo={15}
                            valorMinimo={10}
                            valorBlindagem={valorBlindagem}
                        />
                    </div>
                    <div>
                        <Bracos
                            valorMaximo={15}
                            valorMinimo={10}
                            valorBraco={valorBraco}
                        />
                    </div>
                    <div>
                        <Foguete
                            valorMaximo={15}
                            valorMinimo={10}
                            valorFoguete={valorFoguete}
                        />

                    </div>
                    <div>
                        <Pernas
                            valorMaximo={15}
                            valorMinimo={10}
                            valorPerna={valorPerna}
                        />
                    </div>
                </div>
                <div className={style.estatisticas_container}>
                    <Atributos
                        count={count}
                        newValorBlindagem={newValorBlindagem}

                    />
                </div>
            </div>
        </div>
    )
}

export default Montagem