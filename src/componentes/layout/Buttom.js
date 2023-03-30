import React, { useState } from "react";
import {Descricao, valorMaximo, ValorMinimo} from "../layout/Atributos"



function AtributoPersonagem (props){
  const [valor, setValor] = useState(0)
 
  const diminuirValor = () => {
if(valor > props.ValorMinimo){
  setValor(valor -1)
}
  };
   const aumentarValor = () => {
    if (valor < props.valoMaximo) {
      setValor(valor + 1)
    }
   }

 

  return (
      <div>
        <div>
          <label>{props.Descricao}</label>
          <button  onClick={diminuirValor}>-</button>
          <p>{valor}</p>
          <button  onClick={aumentarValor}>+</button>
        </div>
      
      </div>

)
} export default AtributoPersonagem