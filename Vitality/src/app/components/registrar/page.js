"use client"
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './registrar.css';

export default function Registrar() {
const [titulo, setTitulo] = useState('');
const [data, setData] = useState('');
const [sintomas, setSintomas] = useState('');

const handleSave = async () => {
    const response = await fetch('http://localhost:8000/sintomas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        titulo,
        data,
        sintomas,
    }),
    });

    if (response.ok) {
    Router.push('/salvos');
    } else {
    alert('Erro ao salvar');
    }
};

return (
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
            <Link href="/home">
            <img src="../imgs/voltar.svg" width={15} />
            </Link>
        </div>
        <div className='editar'>
            <div className='dados-editar'>
            <div className="line-one">
                <input
                type='text'
                className="editar-input"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                />
                <input
                type='date'
                className="editar-input"
                value={data}
                onChange={(e) => setData(e.target.value)}
                />
            </div>
            <textarea
                className="editar-input"
                wrap="hard"
                placeholder="Escreva aqui"
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
            ></textarea>
            </div>
            <div className="btns-editar">
            <button type="reset" onClick={() => { setTitulo(''); setData(''); setSintomas(''); }}>Limpar tudo</button>
            <button onClick={handleSave}>Salvar</button>
            </div>
            <div className="buttons-registro">
            <button className="btn-registro">
                <Link href="/salvos">VER SALVOS</Link>
            </button>
            <button className="btn-registro"><Link>GERAR RELATÓRIO</Link></button>
            </div>
            <footer className="rodape">
        <div className="rodape1">
            <li> <Link href="../components/home"><img src="../imgs/icon-home.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">
            <li> <Link href="../components/salvos"> <img src="../imgs/icon-salvos.svg" className="img-footer"/> </Link> </li></div>

        <div className="rodape1">
            <li> <Link href="../components/registrar"> <img src="." className="img-footer"/> </Link> </li></div>
        <div className="rodape1">
            <li> <Link href="../components/hospitais"> <img src="../imgs/icon-med.svg" className="img-footer"/> </Link> </li></div>
        </footer>
            </div>
        </section>
        </div>
    </main>
);
}