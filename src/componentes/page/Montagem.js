import Blindagem from "../partes/Blindagem";
import Atributos from "../layout/Atributos";
import style from "./Montagem.module.css";
import Bracos from "../partes/Bracos";
import Foguete from "../partes/Foguete";
import Pernas from "../partes/Pernas";


import React, { useState } from "react";

function Montagem() {
    const [newValorBlindagem, setNewValorBlindagem] = useState(0);
    const [newValorBraco, setNewValorBraco] = useState(0);
    const [newValorPerna, setNewValorPerna] = useState(0);
    const [newValorFoguete, setNewValorFoguete] = useState(0);

    const valorBlindagem = (blindagemValor) => {
        setNewValorBlindagem(blindagemValor - valorMinimoBlindagem);
    };
    const valorBraco = (bracoValor) => {
        setNewValorBraco(bracoValor - valorMinimoBraco);
    };
    const valorPerna = (pernaValor) => {
        setNewValorPerna(pernaValor - valorMinimoPerna);
    };
    const valorFoguete = (fogueteValor) => {
        setNewValorFoguete(fogueteValor - valorMinimoFoguete);
    };

    const valorMinimoBlindagem = 10;
    const valorMinimoBraco = 10;
    const valorMinimoPerna = 10;
    const valorMinimoFoguete = 10;

    return (
        <div className={style.montagem_container}>
            <div>

                <div className={style.partes_container}>
                    <div>
                        <Blindagem
                            valorMaximo={15}
                            valorMinimo={valorMinimoBlindagem}
                            valorBlindagem={valorBlindagem}
                        />
                    </div>
                    <div>
                        <Bracos
                            valorMaximo={15}
                            valorMinimo={valorMinimoBraco}
                            valorBraco={valorBraco}
                        />
                    </div>
                    <div>
                        <Foguete
                            valorMaximo={15}
                            valorMinimo={valorMinimoFoguete}
                            valorFoguete={valorFoguete}
                        />

                    </div>
                    <div>
                        <Pernas
                            valorMaximo={15}
                            valorMinimo={valorMinimoPerna}
                            valorPerna={valorPerna}
                        />
                    </div>
                </div>
                <div className={style.estatisticas_container}>
                    <Atributos

                        newValorBlindagem={newValorBlindagem}
                        valorMinimoBlindagem={valorMinimoBlindagem}

                        newValorBraco={newValorBraco}
                        valorMinimoBraco={valorMinimoBraco}

                        newValorPerna={newValorPerna}
                        valorMinimoPerna={valorMinimoPerna}

                        newValorFoguete={newValorFoguete}
                        valorMinimoFoguete={valorMinimoFoguete}
                    />
                </div>
            </div>
        </div>
    )
}

export default Montagem