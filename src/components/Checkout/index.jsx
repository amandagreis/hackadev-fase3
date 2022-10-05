import "./styles.css";
import { useState, useContext } from "react";
import Modal from "react-modal";
import IconPg1 from "../../checkout-icons/boleto-icon.png";
import IconPg2 from "../../checkout-icons/pix-icon.png";
import IconPg3 from "../../checkout-icons/card-icon.png";
import IconPg4 from "../../checkout-icons/mercadopago-icon.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { Costumer } from "../Data/Costumer";
import { Link } from "react-router-dom";
import { CarrinhoContext } from "../Context/carrinhoProdutos";
import { limpaProductsTracker } from "../Context/carrinhoProdutos";
import Axios from "axios";
import axios from "axios";

let escolheuFrete, escolheuPagamento;

Modal.setAppElement("#root");

function converteReal(val) {
  if (val === undefined || val === 0) return;

  let converted = val.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return converted;
}

function formataFrete(val) {
  if (typeof val === "number") val = converteReal(val);

  return val;
}

const TextField = ({ placeholder }) => {
  return (
    <label className="text-field">
      {placeholder}
      <input
        type="text"
        name=""
        id=""
        className="text-field"
        placeholder={placeholder}
      />
    </label>
  );
};

const ChangeAddress = ({
  openButtonText,
  closeButtonText,
  modalTitle,
  modalText,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal-container-address">
      <button className="modal-opener-address" onClick={openModal}>
        {openButtonText}
      </button>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Modal"
        overlayClassName="modal-overlay-address"
        className="modal-content-address"
      >
        <div className="info">
          <div className="line">
            <TextField placeholder={"Bairro"} />
          </div>

          <div className="line">
            <TextField placeholder={"Rua"} />

            <TextField placeholder={"Número"} />
          </div>

          <div className="line">
            <TextField placeholder={"Complemento"} />
          </div>
          <div className="line">
            <TextField placeholder={"CEP"} />
            <TextField placeholder={"Cidade"} />
            <TextField placeholder={"Estado"} />
          </div>
        </div>

        <button className="modal-closer-address" onClick={closeModal}>
          {closeButtonText}
        </button>
      </Modal>
    </div>
  );
};

const CheckoutModal = ({
  openButtonText,
  closeButtonText,
  modalTitle,
  modalText,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { setSelectItens } = useContext(CarrinhoContext);

  function limpaCarrinho() {
    setSelectItens([]);
    limpaProductsTracker();
    escolheuFrete = false;
    escolheuPagamento = false;
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  let API = process.env.API;
  function salvaDB() {
    Axios.post("https://api-ocean-hackadev.herokuapp.com/sessao", {
      nome_cliente: "Amanda Reis",
      cpf: "99999999999",
      rua: "Rua Sete",
      numero: "05",
      complemento: "apartamento 307",
      bairro: "Apongas",
      cep: "75360378",
      cidade: "Goinia",
      estado: "GO",
    });
  }

  function terminaCompra() {
    if (escolheuFrete && escolheuPagamento) {
      salvaDB();
      openModal();
      limpaCarrinho();
    } else {
      if (escolheuFrete && !escolheuPagamento)
        window.alert("Escolha uma forma de pagamento!");
      else if (!escolheuFrete && escolheuPagamento)
        window.alert("Escolha o tipo de frete!");
      else window.alert("Escolha uma forma de pagamento e o frete!");
    }
  }

  return (
    <div className="modal-container">
      <button className="modal-opener" onClick={() => terminaCompra()}>
        {openButtonText}
      </button>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h1 className="title">{modalTitle}</h1>
        <div className="info">
          <FaRegCheckCircle />
        </div>
        <Link to="/">
          <button className="modal-closer" onClick={closeModal}>
            {closeButtonText}
          </button>
        </Link>
      </Modal>
    </div>
  );
};

const Cupon = ({ handleDiscount, discount }) => {
  return (
    <div className="cupon">
      <div className="line1">
        <input
          className="input"
          type="text"
          placeholder="Digite seu cupom"
          onChange={handleDiscount}
          value={discount}
        />
        <button className="apply">Aplicar</button>
      </div>

      <div className="line2">
        <p>{discount}</p>
      </div>
    </div>
  );
};

const KeyValuePair = (props) => {
  return (
    <div className="field-line">
      <span className="entry">{props.entry}</span>
      <span className="value">{props.value}</span>
    </div>
  );
};

const Summary = ({
  subtotal,
  frete,
  desconto,
  total,
  prazo,
  formaPagamento,
  parcelas,
}) => {
  return (
    <div className="summary">
      <KeyValuePair entry="Subtotal" value={subtotal} />
      <KeyValuePair entry="Frete" value={frete} />
      {/*<KeyValuePair entry="Desconto" value={desconto} />*/}
      <KeyValuePair entry="Total" value={total} />
      <KeyValuePair entry="Prazo" value={prazo} />
      <KeyValuePair entry="Forma de Pagamento" value={formaPagamento} />
      <KeyValuePair entry="Parcelas" value={parcelas} />
    </div>
  );
};

const OptionField = ({
  name,
  image,
  alt,
  text,
  description,
  alteraFrete,
  alteraPagamento,
  hasIcon,
  valor,
}) => {
  if (hasIcon)
    return (
      <div className="optionField">
        <div className="clickable">
          <input
            type="radio"
            className="clickable"
            name={name}
            onChange={() => alteraPagamento(valor)}
          />
        </div>
        <img className="icon" src={image} alt={alt} />
        <p className="optionText">{text}</p>
        <p className="optionDescription">{description}</p>
      </div>
    );
  else
    return (
      <div className="optionField">
        <div className="clickable">
          <input
            type="radio"
            className="clickable"
            name={name}
            onChange={() => alteraFrete(valor)}
          />
        </div>
        <p className="optionText">{text}</p>
        <p className="optionDescription">{description}</p>
      </div>
    );
};

const ProductBag = ({ content, subtotal }) => {
  return (
    <>
      <div className="product-bag">{content}</div>
      <p className="sum-products">{subtotal}</p>
    </>
  );
};

const Product = ({ image, alt, quantity, priceOriginal, price }) => {
  return (
    <div className="product">
      <img src={image} alt={alt} title={alt} />
      <p className="quantity">{quantity}</p>
      <p className="priceOriginal">{converteReal(priceOriginal)}</p>
      <p className="price">{converteReal(price)}</p>
    </div>
  );
};

const Section = (props) => {
  return (
    <section className="sectionCard">
      <h1 className="sectionCard-title">{props.name}</h1>
      <span>{props.content}</span>
    </section>
  );
};

function CuponFunction() {
  const [discount, setDiscount] = useState("");

  const handleDiscount = (event) => {
    setDiscount(event.target.value);
  };

  return (
    <Section
      name="APLICAR CUPOM"
      content={<Cupon {...{ handleDiscount, discount }} />}
    />
  );
}

const MainSection = () => {
  const { selectItens } = useContext(CarrinhoContext);
  const [valorFrete, setValorFrete] = useState("---");
  const [prazoEntrega, setPrazoEntrega] = useState("---");
  const [pagamentoSelecionado, setPagamento] = useState("---");
  const [quantidadeParcelas, setParcelas] = useState("---");
  let somaProdutos = 0;
  let totalAPagar = 0;

  function alteraFrete(valorFrete) {
    if (valorFrete === 20) setPrazoEntrega("Até 6 dias úteis");

    if (valorFrete === 50) setPrazoEntrega("Até 2 dias úteis");

    if (valorFrete === "Grátis") setPrazoEntrega("Retirada em até 2 horas");

    setValorFrete(valorFrete);

    escolheuFrete = true;
  }

  function alteraPagamento(tipoPagamento) {
    setPagamento(tipoPagamento);

    if (
      tipoPagamento === "Boleto Bancário" ||
      tipoPagamento === "Pix" ||
      tipoPagamento === "Mercado Pago"
    )
      setParcelas("À vista");

    escolheuPagamento = true;
  }
  const [Usuario, setUsuario] = useState(true);
  const [contador, setContador] = useState(0);

  if (contador === 0) {
    const UsuariosR = axios
      .get("https://api-ocean-hackadev.herokuapp.com/clientes")
      .then((resposta) => {
        setUsuario(() => {
          const obj = resposta.data;
          const item = obj.filter((user) => user.id_cliente == 10);
          return item;
        });
        setContador(contador + 1);
      })
      .catch(() => setUsuario(false));
  }

  return (
    <section className="main_section">
      <div className="containerLeft">
        <Section
          name="SUAS COMPRAS"
          key={Date.now()}
          content={
            <ProductBag
              content={selectItens.map((shoppingBag) => {
                somaProdutos +=
                  shoppingBag.precoDesconto * shoppingBag.quantidade;

                if (valorFrete !== "Grátis" && valorFrete !== "---")
                  totalAPagar = somaProdutos + valorFrete;
                else totalAPagar = somaProdutos;

                return (
                  <>
                    <Product
                      key={Date.now()}
                      image={shoppingBag.image}
                      alt={shoppingBag.description}
                      quantity={`x ${shoppingBag.quantidade}`}
                      priceOriginal={shoppingBag.precoOriginal}
                      price={shoppingBag.precoDesconto}
                    />
                  </>
                );
              })}
              subtotal={`Subtotal: ${somaProdutos.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}`}
            />
          }
        />
        <Section
          name="ENDEREÇO"
          key={`${Date.now()}Endereço`}
          content={
            <>
              {typeof Usuario === "object"
                ? Usuario.map((costumer) => {
                    return (
                      <span className="Usuario" key={`${Date.now()}usuario`}>
                        <p key={`${Date.now()}p1`}>{costumer.nome_cliente}</p>
                        <p
                          key={`${Date.now()}p2`}
                        >{`${costumer.rua} nº${costumer.numero}`}</p>
                        <p
                          key={`${Date.now()}p3`}
                        >{`${costumer.bairro}, CEP ${costumer.cep}, ${costumer.cidade}-${costumer.estado}`}</p>
                      </span>
                    );
                  })
                : ""}
              <ChangeAddress
                openButtonText={"ALTERAR ENDEREÇO"}
                closeButtonText={"CONCLUÍDO"}
              />
            </>
          }
        />

        <Section
          name="FRETE"
          content={
            <>
              <OptionField
                valor={50}
                alteraFrete={alteraFrete}
                name="Frete"
                text="Sedex - Até 2 dias úteis"
                description={`+R$ ${(50).toFixed(2)}`}
              />
              <OptionField
                valor={20}
                alteraFrete={alteraFrete}
                name="Frete"
                text="PAC - Até 6 dias úteis"
                description={`+R$ ${(20).toFixed(2)}`}
              />

              <OptionField
                valor={"Grátis"}
                alteraFrete={alteraFrete}
                name="Frete"
                text="Retira - Imediato"
                description="Grátis"
              />
            </>
          }
        />

        <Section
          name="FORMA DE PAGAMENTO"
          content={
            <>
              <OptionField
                valor={"Boleto Bancário"}
                alteraPagamento={alteraPagamento}
                hasIcon={true}
                name="Pagamento"
                image={IconPg1}
                text="Boleto bancário - Vencimento em 3 dias úteis"
              />

              <OptionField
                valor={"Pix"}
                alteraPagamento={alteraPagamento}
                hasIcon={true}
                name="Pagamento"
                image={IconPg2}
                text="Pix - À vista"
              />

              <OptionField
                valor={"Cartão de Credito"}
                alteraPagamento={alteraPagamento}
                hasIcon={true}
                name="Pagamento"
                image={IconPg3}
                text="Cartão de crédito"
              />

              {/*<CreditCardOptions />*/}

              <OptionField
                valor={"Mercado Pago"}
                alteraPagamento={alteraPagamento}
                hasIcon={true}
                name="Pagamento"
                image={IconPg4}
                text="Mercado Pago - À vista"
              />
            </>
          }
        />
      </div>

      <div className="containerRight">
        <CuponFunction />

        <Section
          name="RESUMO"
          content={
            <>
              <Summary
                subtotal={converteReal(somaProdutos)}
                frete={formataFrete(valorFrete)}
                desconto={"R$ 17,98"}
                total={converteReal(totalAPagar)}
                prazo={prazoEntrega}
                formaPagamento={pagamentoSelecionado}
                parcelas={quantidadeParcelas}
              />
            </>
          }
        />

        <Section
          name="FINALIZAR"
          content={
            <CheckoutModal
              modalTitle="Compra finalizada com sucesso!!"
              openButtonText="FINALIZAR COMPRA"
              closeButtonText="VOLTAR PARA O INÍCIO"
            />
          }
        />
      </div>
    </section>
  );
};

function Checkout() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="App-section">
        <MainSection />
      </section>
    </div>
  );
}

export default Checkout;
