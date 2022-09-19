import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserLarge,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";
import MenuMobile from "../MenuMobile";
import Carrinho from "../Carrinho";

export default function Navbar() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <nav id="navbar">
        <nav id="navbar-container">
          <div>
            <Link to="/">
              <img
                src="/static/media/Ocean_logo.png"
                className="logo"
                alt="Logo"
                onClick={scrollToTop}
              />
            </Link>
          </div>
          <div className="input-container">
            <input
              type="text"
              id="search-input"
              className="inputUser"
              autoFocus
              required
            />
            <label htmlhtmlFor="procurar" className="labelInput">
              O que deseja procurar?
            </label>
            <label htmlFor="search-input" className="icon-lupa">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
          </div>
          <div className="user">
            <div className="conta">
              <div className="icon-user">
                <FontAwesomeIcon icon={faUserLarge} />
              </div>
              <div className>
                <div className="minhaconta">Minha Conta</div>
                <div className="cadastro">
                  <Link to="/login" onClick={scrollToTop}>
                    <div className="entrar">Entrar</div>
                  </Link>
                  <div>/</div>
                  <Link to="/cadastro" onClick={scrollToTop}>
                    <div className="cadastrar">Cadastrar</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="icon-cart" ref={LiRef}>
              <div
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              {isOpen && <Carrinho isOpen={isOpen} />}
            </div>
          </div>
        </nav>
      </nav>
      <section>
        <RiMenu3Fill
          onClick={() => setMenuIsVisible(true)}
          className="mobile"
        />
      </section>
    </>
  );
}
