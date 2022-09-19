import "./style.css";
import CarrinhoItem from "../CarrinhoItem/index";
import { Fragment, useContext, useEffect, useState } from "react";
import { CarrinhoContext } from "../Context/carrinhoProdutos";
import {Link} from "react-router-dom"

function Carrinho({ excluir }) {
  const [animation, setAnimation] = useState(false);
  const { selectItens } = useContext(CarrinhoContext);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div className={`Carrinho__Container ${animation && "Active"}`}>
      {selectItens.length > 0 ? (
        selectItens.map((roupa, index) => (
          <Fragment key={index}>
            <CarrinhoItem
              image={roupa.image}
              sizeSelect={roupa.selectSize}
              name={roupa.nome}
              preco={roupa.precoDesconto}
              idItem={roupa.id}
            />
            <hr style={{ width: "100%" }} />
          </Fragment>
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Vazio</h1>
      )}
          <>
    <div className="Botao__checkout">
          <Link to="/checkout">
            <div className="container-botao">
            <button className="buttonCheckout">Finalizar Compra</button>
            </div>
          </Link>
        </div>
    </>
    </div>
  );
}
export default Carrinho;
