import { useState, useEffect } from 'react';
import Link from 'next/link';
import './salvos.css';

export default function Salvos() {
    const [sintomas, setSintomas] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [currentTitulo, setCurrentTitulo] = useState('');
    const [currentData, setCurrentData] = useState('');
    const [currentSintomas, setCurrentSintomas] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/sintomas')
        .then((response) => response.json())
        .then((data) => setSintomas(data));
    }, []);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8000/sintomas/${id}`, {
        method: 'DELETE',
        });
        setSintomas(sintomas.filter((sintoma) => sintoma.id !== id));
    };

    const handleEdit = (sintoma) => {
        setIsEditing(true);
        setCurrentId(sintoma.id);
        setCurrentTitulo(sintoma.titulo);
        setCurrentData(sintoma.data);
        setCurrentSintomas(sintoma.sintomas);
    };

    const handleUpdate = async () => {
        await fetch(`http://localhost:8000/sintomas/${currentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo: currentTitulo,
            data: currentData,
            sintomas: currentSintomas,
        }),
        });
        setSintomas(
        sintomas.map((sintoma) =>
            sintoma.id === currentId
            ? { id: currentId, titulo: currentTitulo, data: currentData, sintomas: currentSintomas }
            : sintoma
        )
        );
        setIsEditing(false);
        setCurrentId(null);
        setCurrentTitulo('');
        setCurrentData('');
        setCurrentSintomas('');
    };

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
                        <Link href="/">
                            <img src="../imgs/voltar.svg" width={15} />
                        </Link>
                    </div>
                    <div className='salvos'>
                        <div className='dados-salvos'>
                            {sintomas.map((sintoma) => (
                                <div key={sintoma.id} className="item-salvo">
                                    {isEditing && currentId === sintoma.id ? (
                                        <>
                                            <input
                                                type='text'
                                                value={currentTitulo}
                                                onChange={(e) => setCurrentTitulo(e.target.value)}
                                            />
                                            <input
                                                type='date'
                                                value={currentData}
                                                onChange={(e) => setCurrentData(e.target.value)}
                                            />
                                            <textarea
                                                value={currentSintomas}
                                                onChange={(e) => setCurrentSintomas(e.target.value)}
                                            ></textarea>
                                            <button onClick={handleUpdate}>Salvar</button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="titulo-item">{sintoma.titulo}</div>
                                            <div>{sintoma.data}</div>
                                            <div>{sintoma.sintomas}</div>
                                            <button onClick={() => handleDelete(sintoma.id)}>Apagar</button>
                                            <button onClick={() => handleEdit(sintoma)}>Editar</button>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <footer className="rodape">
                    <div className="rodape1">
                        <li> <Link href="/home"><img src="../imgs/icon-home.svg" className="img-footer"/> </Link> </li>
                    </div>
                    <div className="rodape1">
                        <li> <Link href="/salvos"> <img src="../imgs/icon-salvos.svg" className="img-footer"/> </Link> </li>
                    </div>
                    <div className="rodape1">
                        <li> <Link href="/registrar"> <img src="../imgs/icon-registrar.svg" className="img-footer"/> </Link> </li>
                    </div>
                    <div className="rodape1">
                        <li> <Link href="/hospitais"> <img src="../imgs/icon-med.svg" className="img-footer"/> </Link> </li>
                    </div>
                </footer>
            </div>
        </main>
    );
}
