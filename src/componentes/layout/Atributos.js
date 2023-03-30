import AtributoPersonagem from '../layout/Buttom';

function Atributos() {
  return (
    <div>
      <AtributoPersonagem Descricao="Força" ValorMinimo={1} ValorMaximo={20} />
      <AtributoPersonagem Descricao="Agilidade" ValorMinimo={1} ValorMaximo={20} />
      <AtributoPersonagem Descricao="Inteligência" ValorMinimo={1} ValorMaximo={20} />
    </div>
  );
}
export default Atributos