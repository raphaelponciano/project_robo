import Atributos from "./Atributos"

function Estatisticas ({ newValorBlindagem, newValorBraco }) {
    const blindagem = { 
        forca: 25, 
        agilidade: 15 
    };
    const braco = { 
        forca: 35, 
        agilidade: -8 
    };
  
    return (
      <div>
        <Atributos blindagem={blindagem} braco={braco} newValorBlindagem={newValorBlindagem} newValorBraco={newValorBraco} />
      </div>
    );
  }

export default Estatisticas