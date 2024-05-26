import styles from '@/app/hospitais/hospital.module.css';
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
                    
            <div>            
<iframe src="https://storage.googleapis.com/maps-solutions-vf3z0agced/neighborhood-discovery/xi2y/neighborhood-discovery.html"
  style={{ width: '100%', height: '100%', border: '0' }} loading="lazy">
</iframe>

</div>
        <footer className="rodape">
        <div className="rodape1">
            <li> <Link href="/home"><img src="../imgs/icon-home.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">    
            <li> <Link href="/salvos"> <img src="../imgs/icon-salvos.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">
            <li> <Link href="/registrar"> <img src="../imgs/icon-registrar.svg" className="img-footer"/> </Link> </li></div>
        <div className="rodape1">
            <li> <Link href="/hospitais"> <img src="../imgs/icon-med.svg" className="img-footer"/> </Link> </li></div>
        </footer>
                </div>
             </div>
         </section>
        </div>
    </main>
    )
}