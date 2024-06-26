import Link from "next/link";
import "./cadastro.module.css";
export default function Cadastro(){
    return(
        <main>
            <div className="logo">
                <img src="../imgs/logo-branco.svg" />
            </div>
            <div className="content">
            <div className="title">
                <h1>Criar Conta</h1>
            </div>
            <section className="fundo-responsivo">
                <div className='cadastro'>
                    <div className="inner-cadastro">
                    <div className="foto1">
                        <img src="../imgs/img-cadastro.svg" alt='mulher mexendo no celular'/>
                    </div>
                    <div className='dados-cadastro'>
                        <input type='text' className="dados-input" placeholder="Nome:"/>
                        <input type='email' className="dados-input" placeholder="E-mail:"/>
                        <input type='text' className="dados-input" placeholder="CEP:"/>
                        <input type='text' className="dados-input" placeholder="Senha:"/>
                        <input type='password' className="dados-input" placeholder="Confirmar senha:" />
                    </div>
                    <div className="btn-entrar">
                        <button type="submit"> CADASTRAR </button>
                    </div>
                    <div className="cadastrar-text">
                        <p>Já possui conta?</p> <Link href="/login"><p>Faça login</p></Link>
                    </div>
                    </div>
                    
                 </div>
                 <footer className="rodape">
        <div className="rodape1">
            <li> <Link href="../components/home"><img src="../imgs/icon-home.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">    
            <li> <Link href="../components/salvos"> <img src="../imgs/icon-salvos.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">
            <li> <Link href="../components/registrar"> <img src="../imgs/icon-registrar.svg" className="img-footer"/> </Link> </li></div>
        <div className="rodape1">
            <li> <Link href="../components/hospitais"> <img src="../imgs/icon-med.svg" className="img-footer"/> </Link> </li></div>
        </footer>
                </section>
                
            </div>
        </main>
    );
}