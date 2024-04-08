import Link from "next/link";

export default function Login(){
    return(
        <main>
            <div className="logo">
                <img src="../imgs/logo-branco.svg" />
            </div>
            <div className="content">
            <div className="title">
                <h1>Entrar</h1>
            </div>
            <section className="fundo-responsivo">
                <div className='login'>
                    <div className="foto1">
                        <img src="../imgs/img-login.svg" alt='mulher mexendo no celular'/>
                    </div>
                    <div className='dados-login'>
                        <input type='text' className="dados-input" placeholder="E-mail:"/>
                        <input type='password' className="dados-input" placeholder="Senha:" />
                    </div>
                    <div className="btn-entrar">
                        <button> ENTRAR </button>
                    </div>
                    <div className="cadastrar-text">
                        <p>Ainda não possui conta?</p> <Link href="./cadastro/cadastro.js"> <p>Cadastre-se </p></Link>
                    </div>
                 </div>
            </section>
            </div>
        </main>
    );
}