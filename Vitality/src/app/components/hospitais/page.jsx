import Maps from "../../utils/api";
import Menu from "../menu/menu";
import "./hospital.module.css";
import Link from "next/link";
export default function Hospitais(){
    return(
        <main>
            <Menu />
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
                        <Maps />
                    </div>   
            <div>            

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
                </div>
             </div>
         </section>
        </div>
    </main>
    )
}