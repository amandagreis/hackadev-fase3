import { useContext, useState, useCallback } from "react";
import "./styles.css";
import { CarrinhoContext } from "../Context/carrinhoProdutos";

function Card({
  name,
  descricao,
  descricaoBojo,
  descricaoMaterial,
  image,
  precoOriginal,
  precoDesconto,
  desconto,
  parcelamento,
  descricaoTamanho,
  roupa,
}) {
  const { adicionarItem } = useContext(CarrinhoContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = useCallback(
    (e) => {
      e.preventDefault();

      adicionarItem(selectedSize, roupa);
    },
    [selectedSize, roupa]
  );

  function handleSelected(e) {
    setSelectedSize(e.target.value);
  }

  const valueBR = precoDesconto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <div className="container">
        <div className="imgZoom">
          <img className="img" src={image} alt={name} />
        </div>
        <div className="descricao">
          <div className="teste">
            <div className="teste1">
              <h1>{name}</h1>
              <p className="descricao-produto">{descricao}</p>
              <p className="descricao-produto">{descricaoBojo}</p>
              <p className="descricao-produto">{descricaoMaterial}</p>
            </div>

            <div className="teste2">
              <p className="preco-original">{precoOriginal}</p>
              <p className="preco-desconto">{valueBR}</p>
              <p className="desconto">{desconto}</p>
              <p className="parcelamento">{parcelamento}</p>
              <p className="descricao-tamanho">{descricaoTamanho}</p>

              <form onSubmit={handleSizeSelect}>
                <div className="botoes">
                  <input
                    className="Bt__input"
                    type="radio"
                    name="tamanho"
                    id="P"
                    value="P"
                    onChange={handleSelected}
                  />
                  <label className="Bt" htmlhtmlFor="P">
                    P
                  </label>
                  <input
                    className="Bt__input"
                    type="radio"
                    name="tamanho"
                    id="M"
                    value="M"
                    onChange={handleSelected}
                  />
                  <label className="Bt" htmlhtmlFor="M">
                    M
                  </label>
                  <input
                    className="Bt__input"
                    type="radio"
                    name="tamanho"
                    id="G"
                    value="G"
                    onChange={handleSelected}
                  />
                  <label className="Bt" htmlhtmlFor="G">
                    G
                  </label>
                  <input
                    className="Bt__input"
                    type="radio"
                    name="tamanho"
                    id="GG"
                    value="GG"
                    onChange={handleSelected}
                  />
                  <label className="Bt" htmlhtmlFor="GG">
                    GG
                  </label>
                </div>
                <div className="container-botao">
                  <button type="submit" className="Bts">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
