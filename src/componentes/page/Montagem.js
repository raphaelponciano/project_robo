import Blindagem from "../partes/Blindagem";
import Atributos from "../layout/Atributos";
import style from "./Montagem.module.css";
import Bracos from "../partes/Bracos";
import Foguete from "../partes/Foguete";
import Pernas from "../partes/Pernas";

function Montagem() {
    return (
        <div className={style.montagem_container}>
            <div>
                <div className={style.estatisticas_container}>
                    <Atributos />
                </div>
                <div className={style.partes_container}>
                    <div>
                        <Blindagem />
                    </div>
                    <div>
                        <Bracos />
                    </div>
                    <div>
                        <Foguete />
                    </div>
                    <div>
                        <Pernas />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Montagem