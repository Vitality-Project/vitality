import "./salvos.css";
import Link from "next/link";

export default function Salvos(){
    
    return(
        
    <div className="content-salvos">
        <div className="salvos">
            { posts.map((arrayPosts, posicao) => (
                <section className="salvo" key={ posicao }>
                    <div className="titulo">
                        <p>{ arrayPosts.titulo }</p>
                    </div>
                    <div className="btn-salvos">
                        <button className="btn-slv"> Apagar </button>
                        <Link href="/editar" className="btn-slv"> <button> Editar </button> </Link>
                    </div>
                </section>
                
            ))}
        </div>
        <footer className="rodape">
        <div className="rodape1">
            <li> <Link href="/salvos"><img src="../imgs/icon-home.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">    
            <li> <Link href="/salvos"> <img src="../imgs/icon-salvos.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">
            <li> <Link href="/registrar"> <img src="../imgs/icon-registrar.svg" className="img-footer"/> </Link> </li></div>
        <div className="rodape1">
            <li> <Link href="/hospitais"> <img src="../imgs/icon-med.svg" className="img-footer"/> </Link> </li></div>
        </footer>
    </div>
    
    );
}

const posts = [
    {
        titulo: "titulo",
    },
    {
        titulo: "titulo",
    },
    {
        titulo: "titulo",
    }
];
