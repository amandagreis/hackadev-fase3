import "./style.css";
import { useEffect, useState, useContext } from "react";
import { CarrinhoContext } from "../Context/carrinhoProdutos";


function CarrinhoItem({ name, image, sizeSelect, preco, idItem, quantidade}) {
  const [mult, setMult] = useState(1);
  const [totalProduto, setTotalProduto] = useState(preco);
  const { excluir } = useContext(CarrinhoContext);
  const { incremento } = useContext(CarrinhoContext);
  const { decremento } = useContext(CarrinhoContext);
  const { mostraQuantidade } = useContext(CarrinhoContext);

  function operacao(n) {
    if (mult === 1 && n === -1) {
      return;
    }

    setMult(mult + n);
  }



  useEffect(() => {
    setTotalProduto(preco * quantidade);
  }, [quantidade, preco]);


  function converteReal (valor) {
    let val = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return val;
  }

  return (
    <>
    <>
      <div className="CarrinhoItem__Container">
        <img
          src={image}
          alt={name}
          width={100}
          style={{ objectFit: "cover" }}
        />
        <div className="Infos">
          <h2>{name}</h2>
          <p>Tamanho: {sizeSelect}</p>
          <p>{converteReal(totalProduto)}</p>
          <div className="Value__controller">
          <button onClick={() => decremento(idItem)}>-</button>
            <p>{quantidade}</p>
            <button onClick={() => incremento(idItem)}>+</button>
          </div>
        </div>
      </div>
      <button className="Botao-excluir" onClick={() => excluir(idItem)}>
          Excluir
        </button>
    </>
    </>
  );
}
export default CarrinhoItem;
