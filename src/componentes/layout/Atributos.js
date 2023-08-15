import style from "../css/Estatisticas.module.css";
import React, { useEffect, useState } from "react";




function Atributos(props) {
    const { newValorBlindagem
        , valorMinimoBlindagem
        , newValorBraco
        , valorMinimoBraco
        , newValorPerna
        , valorMinimoPerna
        , newValorFoguete
        , valorMinimoFoguete
    } = props;

    const [valores, setValores] = useState({
        forca: 0,
        agilidade: 0,
        velocidade: 0,
        poder: 0,
        energia: 0
    });

//Valores dos atributos
    const blindagem = {
        agilidade: 15,
        energia: 10,
        forca: 25,
        poder: 13,
        velocidade: -8
    };

    const braco = {
        agilidade: -8,
        energia: -3,
        forca: 35,
        poder: 10,
        velocidade: 0
    };

    const perna = {
        agilidade: 10,
        energia: 22,
        forca: 0,
        poder: 5,
        velocidade: 30
    };

    const foguete = {
        agilidade: 5,
        energia: -5,
        forca: 8,
        poder: 45,
        velocidade: 10,
    }

//Calculo atributos por ponto em cada parte
    const blindagemAtualizada = {
        agilidade: blindagem.agilidade * (newValorBlindagem + valorMinimoBlindagem),
        energia: blindagem.energia * (newValorBlindagem + valorMinimoBlindagem),
        forca: blindagem.forca * (newValorBlindagem + valorMinimoBlindagem),
        poder: blindagem.poder * (newValorBlindagem + valorMinimoBlindagem),
        velocidade: blindagem.velocidade * (newValorBlindagem + valorMinimoBlindagem),
    };

    const bracoAtualizado = {
        agilidade: braco.agilidade * (newValorBraco + valorMinimoBraco),
        energia: braco.energia * (newValorBraco + valorMinimoBraco),
        forca: braco.forca * (newValorBraco + valorMinimoBraco),
        poder: braco.poder * (newValorBraco + valorMinimoBraco),
        velocidade: braco.velocidade * (newValorBraco + valorMinimoBraco),
    };

    const pernaAtualizada = {
        agilidade: perna.agilidade * (newValorPerna + valorMinimoPerna),
        energia: perna.energia * (newValorPerna + valorMinimoPerna),
        forca: perna.forca * (newValorPerna + valorMinimoPerna),
        poder: perna.poder * (newValorPerna + valorMinimoPerna),
        velocidade: perna.velocidade * (newValorPerna + valorMinimoPerna),
    };

    const fogueteAtualizado = {
        agilidade: foguete.agilidade * (newValorFoguete + valorMinimoFoguete),
        energia: foguete.energia * (newValorFoguete + valorMinimoFoguete),
        forca: foguete.forca * (newValorFoguete + valorMinimoFoguete),
        poder: foguete.poder * (newValorFoguete + valorMinimoFoguete),
        velocidade: foguete.velocidade * (newValorFoguete + valorMinimoFoguete),
    };

//somatora dos atributos totais dos pontos de cada parte por atributo
    const agilidadeTotal = blindagemAtualizada.agilidade + 
    bracoAtualizado.agilidade + 
    pernaAtualizada.agilidade + 
    fogueteAtualizado.agilidade;

    const energiaTotal = blindagemAtualizada.energia + 
    bracoAtualizado.energia + 
    pernaAtualizada.energia + 
    fogueteAtualizado.energia;

    const forcaTotal = blindagemAtualizada.forca + 
    bracoAtualizado.forca +
    pernaAtualizada.forca + 
    fogueteAtualizado.forca;

    const poderTotal = blindagemAtualizada.poder + 
    bracoAtualizado.poder + 
    pernaAtualizada.poder + 
    fogueteAtualizado.poder;

    const velocidadeTotal = blindagemAtualizada.velocidade + 
    bracoAtualizado.velocidade + 
    pernaAtualizada.velocidade + 
    fogueteAtualizado.velocidade;

//atualização em tela por cada alteração
    useEffect(() => {

        setValores(valores => ({ ...valores, forca: forcaTotal, agilidade: agilidadeTotal, energia: energiaTotal, poder: poderTotal, velocidade: velocidadeTotal }));


    }, [forcaTotal, agilidadeTotal, energiaTotal, poderTotal, velocidadeTotal]);


    /* versão 1 funcionando
    const { count, newValorBlindagem } = props;
    
    const [forca, setForca] = useState(0);
    const [agilidade, setAgilidade] = useState(0);

  useEffect(() => {
    setForca((count + newValorBlindagem) * 10);
    setAgilidade(count * 5);
  }, [count, newValorBlindagem]);
*/
    return (
        <div>
            <section className={style.box_estatisticas}>

                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Força</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{valores.forca}</p>
                    </div>
                </div>
                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Poder</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{valores.poder}</p>
                    </div>
                </div>
                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Energia</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{valores.energia}</p>
                    </div>
                </div>
                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Velocidade</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{valores.velocidade}</p>
                    </div>
                </div>
                <div className={style.estatistica}>
                    <p className={style.estatistica_titulo}>Agilidade</p>
                    <div className={style.estatistica_valor}>
                        <p className={style.estatistica_numero}>{valores.agilidade}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Atributos 