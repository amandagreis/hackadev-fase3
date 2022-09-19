import { Link } from "react-router-dom";
import "./styles.css";

function Login() {
  return (
    <>
      <div className="container-login">
        <div className="content-box">
          <div className="form-box">
            <h2>Ocean Login</h2>
            <form>
              <div className="input-box">
                <span>Usuario</span>
                <input type="email" placeholder="@mail.com" />
              </div>

              <div className="input-box">
                <span>Senha</span>
                <input type="password" placeholder="senha" />
              </div>

              <div className="remember">
                <label>
                  {" "}
                  <input type="checkbox" />Lembrar{" "}
                </label>
                <a href="/#">Esqueceu a Senha?</a>
              </div>

              <div>
                <button className="input-box1">ENTRAR</button>
              </div>

              <div className="input-box">
                <p>
                  Não tem uma conta? <Link to="/cadastro">Inscrever-se</Link>
                </p>
              </div>
            </form>
            <h3>Logar Com</h3>
            <ul className="ul">
              <li>
                <a rel="noreferrer" href="https://facebook.com" target="_blank">
                  <img src="/static/media/Facebook.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="https://google.com" target="_blank">
                  <img src="/static/media/Google.png" alt="Google" />
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="https:linkedin.com" target="_blank">
                  <img src="/static/media/Linkedin.png" alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
