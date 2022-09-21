import "./styles.css";
import { useState, useContext } from "react";
import Modal from "react-modal";
import IconPg1 from "../../checkout-icons/boleto-icon.png";
import IconPg2 from "../../checkout-icons/pix-icon.png";
import IconPg3 from "../../checkout-icons/card-icon.png";
import IconPg4 from "../../checkout-icons/mercadopago-icon.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Costumer } from "../Data/Costumer";
import { CarrinhoContext } from "../Context/carrinhoProdutos";
import { limpaProductsTracker} from "../Context/carrinhoProdutos";
import { type } from "@testing-library/user-event/dist/type";

Modal.setAppElement("#root");

function converteReal(val) {
  if (val === undefined || val === 0) return;

  let converted = val.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return converted;
}

function formataFrete(val){
  if(typeof(val) === "number")
  val = converteReal(val);

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

  function limpaCarrinho(){
    setSelectItens([]);
    limpaProductsTracker();
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal-container">
      <button className="modal-opener" onClick={() => {openModal(); limpaCarrinho()}}>
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
      <KeyValuePair entry="Desconto" value={desconto} />
      <KeyValuePair entry="Total" value={total} />
      <KeyValuePair entry="Prazo" value={prazo} />
      <KeyValuePair entry="Forma de Pagamento" value={formaPagamento} />
      <KeyValuePair entry="Parcelas" value={parcelas} />
    </div>
  );
};

const OptionField = ({name, image, alt, text, description, handleChange, hasIcon, valor}) => {
  

  if (hasIcon)
    return (
      <div className="optionField">
        <div className="clickable" >
          <input type="radio" className="clickable" name={name} onChange={() => handleChange(valor)} />
        </div>
        <img className="icon" src={image} alt={alt} />
        <p className="optionText">{text}</p>
        <p className="optionDescription">{description}</p>
      </div>
    );
  else
    return (
      <div className="optionField">
        <div className="clickable" >
          <input type="radio" className="clickable" name={name}  onChange={() => handleChange(valor)} />
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
  function valueToBRL(val) {
    if (val === undefined || val === 0) return;

    let converted = val.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return converted;
  }
  return (
    <div className="product">
      <img src={image} alt={alt} title={alt} />
      <p className="quantity">{quantity}</p>
      <p className="priceOriginal">{valueToBRL(priceOriginal)}</p>
      <p className="price">{valueToBRL(price)}</p>
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
  const [valorFrete, setValorFrete] = useState("-")
  const [prazoEntrega, setPrazoEntrega] = useState("-")
  let somaProdutos = 0;
  let pagamentoSelecionado = "";
  let quantidadeParcelas = "";
  let totalAPagar = 0;

  function handleChange (val){
    
    if(val === 20)
    setPrazoEntrega("Até 6 dias úteis");

    if(val === 50)
    setPrazoEntrega("Até 2 dias úteis");

    if(val == "Grátis")
    setPrazoEntrega("Retirada em até 2 horas");

    setValorFrete(val)

  }

  return (
    <section className="main_section" >
      <div className="containerLeft">
        <Section
          name="SUAS COMPRAS"
          key={Date.now()}
          content={
            <ProductBag
              
              content={selectItens.map((shoppingBag) => {
                somaProdutos += shoppingBag.precoDesconto * shoppingBag.quantidade;
               
                if(valorFrete !== "Grátis" && valorFrete !== "-")
                totalAPagar = somaProdutos + valorFrete;
                else
                totalAPagar = somaProdutos;

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
              {Costumer.map((costumer) => {
                return (
                  <span className="Usuario" key={`${Date.now()}usuario`}>
                    <p key={`${Date.now()}p1`}>{costumer.name}</p>
                    <p key={`${Date.now()}p2`}>{`${costumer.street} nº${costumer.number}`}</p>
                    <p key={`${Date.now()}p3`}>{`${costumer.district}, CEP ${costumer.cep}, ${costumer.city}-${costumer.state}`}</p>
                    <p key={`${Date.now()}p4`}>{`Telefone: ${costumer.phone}`}</p>
                  </span>
                );
              })}
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
                handleChange={handleChange}
                name="Frete"
                text="Sedex - Até 2 dias úteis"
                description={`+R$ ${(50).toFixed(2)}`}
              />
              <OptionField
                valor={20}
                handleChange={handleChange}
                name="Frete"
                text="PAC - Até 6 dias úteis"
                description={`+R$ ${(20).toFixed(2)}`}
              />

              <OptionField
                valor={"Grátis"}
                handleChange={handleChange}
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
                hasIcon={true}
                name="Pagamento"
                image={IconPg1}
                text="Boleto bancário - Vencimento em 3 dias úteis"
              />

              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg2}
                text="Pix - À vista"
              />

              <OptionField
                hasIcon={true}
                name="Pagamento"
                image={IconPg3}
                text="Cartão de crédito"
              />

              {/*<CreditCardOptions />*/}

              <OptionField
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
