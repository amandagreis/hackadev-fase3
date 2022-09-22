import { Container } from "./styled";
import { IoClose } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";
import Carrinho from "../Carrinho";
import {Link} from "react-router-dom"

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.querySelector("*").style.overflowY = menuIsVisible
      ? "hidden"
      : "auto";
  }, [menuIsVisible]);
 
  const [isOpen, setIsOpen] = useState(false);

  const LiRef = useRef();

  useEffect(() => {
    function checkClick(e) {
      if (LiRef.current && isOpen && !LiRef.current.contains(e.target))
        setIsOpen(false);
    }

    window.addEventListener("click", checkClick);

    return () => window.removeEventListener("click", checkClick);
  }, [isOpen]);

  function fechaCarrinho(){
    setIsOpen(false);
  }

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose
        className="svg"
        size={45}
        onClick={() => setMenuIsVisible(false)}
      />
      <div className="user">
        <div className="conta">
          <div className="login-conta">
            <div className="icon-user">
              <FontAwesomeIcon icon={faUserLarge} />
            </div>
            
            <div className="minhaconta">Minha Conta</div>
              <div className="cadastro">
                <div className="entrar">
                <Link to="/login">Entrar</Link>
                </div>
                <div>/</div>
                <div className="cadastrar">
                <Link to="/cadastro">Cadastrar</Link>
                </div>
              </div>
          </div>
        </div>
        <div className="shopping-cart-container">
          <div className="icon-cart" ref={LiRef}>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faCartShopping} />
           </div>
                   {isOpen && <Carrinho isOpen={isOpen} />} 
          </div>
          </div>
      </div>
      <section>
        <RiMenu3Fill className="mobile" />
      </section>
    </Container>
  );
}
