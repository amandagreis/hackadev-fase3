import "./style.css";
import { useEffect, useState, useContext } from "react";
import { CarrinhoContext } from "../Context/carrinhoProdutos";


function CarrinhoItem({ name, image, sizeSelect, preco, idItem }) {
  const [mult, setMult] = useState(1);
  const [totalProduto, setTotalProduto] = useState(preco);
  const { excluir } = useContext(CarrinhoContext);

  function operacao(n) {
    if (mult === 1 && n === -1) {
      return;
    }

    setMult(mult + n);
  }

  useEffect(() => {
    setTotalProduto(parseFloat((preco * mult).toFixed(2)));
  }, [mult, preco]);

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
          <p>R${totalProduto}</p>
          <div className="Value__controller">
            <button onClick={() => operacao(1)}>+</button>
            <p>{mult}</p>
            <button onClick={() => operacao(-1)}>-</button>
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
