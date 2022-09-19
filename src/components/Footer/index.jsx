import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import "./styles.css";

export default function Footer() {
    const scrollToTop =() => {
        scroll.scrollToTop();
      }

    return (
        <footer id="footer">
            <div id="footer-container">
                <div>
                    <Link to="/"><img src="/static/media/Ocean_logo.png" className="logo" alt="Logo" onClick={scrollToTop} /></Link>
                </div>
        
                <div className="footer-content">
                    <ul className="footer-menu">
                        <h4>INSTITUCIONAL</h4>
                        <Link to="/quemsomos"><li className="footer-menu-item" onClick={scrollToTop}>Quem Somos</li></Link>
                        <Link to="/seguranca"><li className="footer-menu-item" onClick={scrollToTop}>Segurança</li></Link>
                        <Link to="/envio"><li className="footer-menu-item" onClick={scrollToTop}>Envio</li></Link>
                        <Link to="/trocaedevolucao"><li className="footer-menu-item" onClick={scrollToTop}>Troca e Devolução</li></Link>
                        <Link to="/cuidados"><li className="footer-menu-item" onClick={scrollToTop}>Cuidados com sua peça Ocean</li></Link>
                        <Link to="/faleconosco"><li className="footer-menu-item" onClick={scrollToTop}>Fale Conosco</li></Link>
                    </ul>
        
                    <ul className="footer-menu">
                        <h4>ATENDIMENTO</h4>
                        <li className="footer-menu-item">
                            (62) 99999-9999
                        </li>
                        <li className="footer-menu-item">
                            (62) 3999-9999
                        </li>
                        <li className="footer-menu-item">
                            atendimento@ocean.com.br
                        </li>
                    </ul>
        
                    <ul className="footer-menu">
                        <h4>CONTATO</h4>
                        <li className="footer-menu-item">
                            (62) 99999-9999
                        </li>
        
                        <li className="footer-menu-item">
                            contato@ocean.com.br
                        </li>
                    </ul>
        
                    <div className="socials">
                        <a rel="noreferrer" href="https://instagram.com" target="_blank"><img src="/static/media/Instagram.png" alt="" /></a>              
                        <a rel="noreferrer" href="https://facebook.com" target="_blank"><img src="/static/media/Facebook.png" alt="" /></a>
                        <a rel="noreferrer" href="https://twitter.com" target="_blank"><img src="/static/media/Twitter.png" alt="" /></a>
                    </div>
        
                </div>
            </div>
        </footer>
    );
}