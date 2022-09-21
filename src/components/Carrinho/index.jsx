import "./style.css";
import CarrinhoItem from "../CarrinhoItem/index";
import { Fragment, useContext, useEffect, useState } from "react";
import { CarrinhoContext } from "../Context/carrinhoProdutos";
import {Link} from "react-router-dom"

function Carrinho({ fechaCarrinho }) {
  const [animation, setAnimation] = useState(false);
  const { selectItens } = useContext(CarrinhoContext);

  useEffect(() => {
    setAnimation(true);
  }, []);

  if(selectItens.length > 0)
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
              quantidade={roupa.quantidade}
            />
            <hr style={{ width: "100%" }} />

           
          </Fragment>

          
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Seu carrinho está vazio</h1>
      )}

<>
            <div className="Botao__checkout">
              <Link to="/checkout">
              <div className="container-botao">
              <button className="buttonCheckout">Ir para Pagamento</button>
              </div>
              </Link>
            </div>
           </>
     
    </div>
  );
  else
  return(
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
              quantidade={roupa.quantidade}
            />
            <hr style={{ width: "100%" }} />

           
          </Fragment>

          
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Seu carrinho está vazio</h1>
      )}

     
    </div>
  )

}
export default Carrinho;
