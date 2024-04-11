import Link from "next/link"; 
import "./registrar.css";
export default function Registrar(){
    return(
        <main>
        <div className="logo">
            <img src="../imgs/logo-branco.svg" />
        </div>
        <div className="content">
        <div className="title">
            <h1>Registrar Sintomas</h1>
        </div>
        <section className="fundo-responsivo">
        <div className="voltar">
           <Link href="/home"> <img src="../imgs/voltar.svg" width={15} /> </Link>
        </div>
            <div className='editar'>
                <div className='dados-editar'>
                <div className="line-one">
                    <input type='text' className="editar-input" placeholder="Título"/>
                    <input type='date' className="editar-input" id="input-data" placeholder="Data" />
                </div>
                <textarea className="editar-input" wrap="hard" id="input-sintomas" placeholder="Escreva aqui"> </textarea>
                </div>
                <div className="btns-editar">
                    <button type="reset"> Limpar tudo </button>
                    <button > Salvar </button>
                </div>
                <div className="buttons-registro">
                    <button className="btn-registro"> <Link href="/salvos"> <a> VER SALVOS </a> </Link> </button>
                    <button className="btn-registro"> <a>GERAR RELATÓRIO</a> </button>
                </div>
            </div>
         </section> 
        </div>
    </main>
    );
}