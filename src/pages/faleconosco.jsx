import InputMask from 'react-input-mask';
import "./styles.css";

export default function FaleConosco() {
    return (
        <>
            <div className="textoFaleConosco">
                <h3>Fale conosco</h3>
                <h4>Formulário de Contato</h4>
                <p>Campos marcados com * são de preenchimento obrigatório.</p>
                <form className="formulario">
                    <div className='inputcontainer'>
                        <input type="text" className="inputuser" required ></input>
                        <label htmlFor="nome" className="labelinput">*Nome</label>
                    </div>
                    <div className='inputcontainer'>
                        <input type="text" className="inputuser" required ></input>
                        <label htmlFor="empresa" className="labelinput">Empresa</label>
                    </div>
                    <div className='inputcontainer'>
                        <input type="text" className="inputuser" required ></input>
                        <label htmlFor="email" className="labelinput">*E-mail</label>
                    </div>
                    <div className='inputcontainer'>
                        <InputMask type="tel" name="telefone" id="telefone" className="inputuser" required mask="(99) 99999-9999" maskChar=" " />
                        <label htmlFor="telefone" className="labelinput">Telefone</label>
                    </div>
                    <div className='inputcontainer'>
                        <input type="text" className="inputuser" required ></input>
                        <label htmlFor="assunto" className="labelinput">Assunto</label>
                    </div>                       
                    <div className='inputcontainer'>
                        <textarea className="inputuser" name="" id="textArea" required ></textarea>
                        <label htmlFor="mensagem" className="labelinput">*Mensagem</label>
                        <button className="btnEnviar" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}