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