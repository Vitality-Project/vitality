import "./editar.css";
import Link from "next/link";

export default function Editar(){
return(
    <main>
    <div className="logo">
        <img src="../imgs/logo-branco.svg" />
    </div>
    <div className="content">
    <div className="title">
        <h1>Editar Item</h1>
    </div>
    <section className="fundo-responsivo">
    <div className="voltar">
        <Link href="./registrar"> <img src="../imgs/voltar.svg"/> </Link>
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
                <button type="reset" className="button-editar"> Apagar </button>
                <button className="button-editar">  <Link href="/salvos"> <a> Salvar </a></Link> </button>
            </div>
        </div>
    </section>    
    </div>
</main>
);
}