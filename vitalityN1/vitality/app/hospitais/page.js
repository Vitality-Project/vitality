import "./hospital.css";
import Link from "next/link";
export default function Hospitais(){
    return(
        <main>
        <div className="logo">
            <img src="../imgs/logo-branco.svg" />
        </div>
        <div className="content">
        <div className="title">
            <h1>Hospitais</h1>
        </div>
        <section className="fundo-responsivo">
        <div className="voltar"> 
           <Link href="/"> <img src="../imgs/voltar.svg" width={15} /> </Link>
        </div>
            <div className='hospital'>
                <div className="inner-hospital">
                    <div className="legenda-hospital">
                        <h2>Encontre o hospital mais próximo e apresente seus sintomas.</h2>
                    </div>
                    <div className="foto-hospital">
                        <img src="../imgs/img-hospitais.svg" alt='mulher mexendo no celular'/>
                    </div>
                    <div className='dados-hospital'>
                        <input type='text' className="dados-input" placeholder="Endereço:"/>
                        <input type='text' className="dados-input" placeholder="CEP:"/>
                        <input type='text' className="dados-input" placeholder="Cidade:"/>
                        <input type='text' className="dados-input" placeholder="Estado: "/>
                    </div>
                    <div className="btn-encontrar">
                        <button type="submit"> ENCONTRAR </button>
                    </div>
                </div>
             </div>
         </section>
        </div>
    </main>
    )
}