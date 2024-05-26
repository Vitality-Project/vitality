import "./salvos.css";
import Link from "next/link";
import SalvosComponent from "../components/Salvos";

export default function Salvo() {
    return (
        <main>
            <div className="logo">
                <Link href="/home">
                    <img src="../imgs/logo-branco.svg" />
                </Link>
            </div>
            <div className="content">
                <div className="title">
                    <h1>Salvos</h1>
                </div>
                <section className="fundo-responsivo">
                    <div className="voltar">
                        <Link href="/"> <img src="../imgs/voltar.svg" width={15} /> </Link>
                    </div>
                    <SalvosComponent />
                </section>
            </div>
        </main>
    );
}