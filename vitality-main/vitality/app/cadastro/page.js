import Link from "next/link";
import "./cadastro.css";
import Menu from "../components/menu/menu";

export default function Cadastro(){
    return(
        <main>
            <Menu />
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
                 
            </section>
            
            </div>
        </main>
    );
}