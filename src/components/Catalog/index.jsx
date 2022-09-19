import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../Showcase/index";
import "./styles.css";

export default function Catalog() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section id="catalog">
      <div id="catalog-container">
        <div className="catalog-item">
          <div className="image">
            <Link to="/card/1" onClick={scrollToTop}>
              <img
                src="/static/media/Fundo do Mar desc.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Fundo do mar</h5>
          <h4>
            <s>R$ 105,00</s>
          </h4>
          <h3>R$ 84,00</h3>
          <h6>ou em 2x de R$ 42,00 Sem juros</h6>
          <Link to="/card/1">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/2" onClick={scrollToTop}>
              <img
                src="/static/media/Tiras.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Tiras</h5>
          <h3>R$ 100,00</h3>
          <h6>ou em 2x de R$ 50,00 Sem juros</h6>
          <Link to="/card/2">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/3" onClick={scrollToTop}>
              <img
                src="/static/media/Croche.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Crochê</h5>
          <h3>R$ 95,00</h3>
          <h6>ou em 2x de R$ 47,50 Sem juros</h6>
          <Link to="/card/3">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/4" onClick={scrollToTop}>
              <img
                src="/static/media/Mozaico.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Mozaico</h5>
          <h3>R$ 80,00</h3>
          <h6>ou em 2x de R$ 40,00 Sem juros</h6>
          <Link to="/card/4">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/5" onClick={scrollToTop}>
              <img
                src="/static/media/Babado.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Babado</h5>
          <h3>R$ 105,00</h3>
          <h6>ou em 2x de R$ 52,50 Sem juros</h6>
          <Link to="/card/5">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/6" onClick={scrollToTop}>
              <img
                src="/static/media/Ombro a Ombro.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Ombro a ombro</h5>
          <h3>R$ 85,00</h3>
          <h6>ou em 2x de R$ 42,50 Sem juros</h6>
          <Link to="/card/6">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/7" onClick={scrollToTop}>
              <img
                src="/static/media/Animal Print desc.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Animal print</h5>
          <h4>
            <s>R$ 89,90</s>
          </h4>
          <h3>R$ 71,96</h3>
          <h6>ou em 2x de R$ 35,98 Sem juros</h6>
          <Link to="/card/7">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/8" onClick={scrollToTop}>
              <img
                src="/static/media/Floral desc.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Floral</h5>
          <h4>
            <s>R$ 70,00</s>
          </h4>
          <h3>R$ 56,00</h3>
          <h6>ou em 2x de R$ 28,00 Sem juros</h6>
          <Link to="/card/8">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/9" onClick={scrollToTop}>
              <img
                src="/static/media/Camisa desc.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Camisa</h5>
          <h4>
            <s>R$ 80,00</s>
          </h4>
          <h3>R$ 64,00</h3>
          <h6>ou em 2x de R$ 32,00 Sem juros</h6>
          <Link to="/card/9">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/10" onClick={scrollToTop}>
              <img
                src="/static/media/Listrado.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Listrado</h5>
          <h3>R$ 70,00</h3>
          <h6>ou em 2x de R$ 35,00 Sem juros</h6>
          <Link to="/card/10">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/11" onClick={scrollToTop}>
              <img
                src="/static/media/Lisa.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Lisa</h5>
          <h3>R$ 85,00</h3>
          <h6>ou em 2x de R$ 42,50 Sem juros</h6>
          <Link to="/card/11">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>

        <div className="catalog-item">
          <div className="image">
            <Link to="/card/12" onClick={scrollToTop}>
              <img
                src="/static/media/Abstrata.png"
                alt="Catag"
                className="catalog-image"
              />
            </Link>
          </div>
          <h5>Abstrata</h5>
          <h3>R$ 80,00</h3>
          <h6>ou em 2x de R$ 40,00 Sem juros</h6>
          <Link to="/card/12">
            <button onClick={scrollToTop} className="search-variations">
              VER TAMANHOS DISPONÍVEIS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
