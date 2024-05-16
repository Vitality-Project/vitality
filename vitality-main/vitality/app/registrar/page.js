import Link from "next/link";
import { useState, useEffect } from "react";
import { addSymptom, getSymptoms, updateSymptom, deleteSymptom } from "@/utils/api.js";
import styles from "./registrar.module.css";
import { v4 as uuid } from "uuid";

export default function Registrar() {
const [symptoms, setSymptoms] = useState(null);
const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [description, setDescription] = useState("");
const [id, setID] = useState("");

useEffect(() => {
    fetchSymptoms();
}, []);

const fetchSymptoms = async () => {
    try {
    const data = await getSymptoms();
    setSymptoms(data);
    } catch (error) {
    console.error("ERROR: " + error);
    }
};

const handleAddSymptom = async () => {
    try {
    const newSymptom = { id: uuid(), title, date, description };
    await addSymptom(newSymptom);
    fetchSymptoms();
    setTitle("");
    setDate("");
    setDescription("");
    } catch (error) {
    console.error("ERROR: " + error);
    }
};

const handleUpdateSymptom = async () => {
    try {
    const updatedSymptom = { id, title, date, description };
    await updateSymptom(updatedSymptom);
    fetchSymptoms();
    setID("");
    setTitle("");
    setDate("");
    setDescription("");
    } catch (error) {
    console.error("ERROR: " + error);
    }
};

// Página de Editar Itens
const handleDeleteSymptom = async (id) => {
    try {
    await deleteSymptom(id);
    fetchSymptoms();
    setID("");
    setTitle("");
    setDate("");
    setDescription("");
    } catch (error) {
    console.error("ERROR: " + error);
    }
};

return (
    <main>
    <div className={styles.logo}>
        <img src="../imgs/logo-branco.svg" />
    </div>
    <div className={styles.content}>
        <div className={styles.title}>
        <h1>Registrar Sintomas</h1>
        </div>
        <section className={styles.fundo_responsivo}>
        <div className={styles.voltar}>
            <Link href="/home">
            <img src="../imgs/voltar.svg" width={15} />
            </Link>
        </div>
        <div className={styles.editar}>
            <div className={styles.dados_editar}>
            <div className={styles.line_one}>
                <input type="text" className={styles.editar_input} placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="date" className={styles.editar_input} id="input-data" placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <textarea className={styles.editar_input} wrap="hard" id="input-sintomas" placeholder="Escreva aqui" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className={styles.btns_editar}>
            <button type="reset" onClick={() => { setID(""); setTitle(""); setDate(""); setDescription(""); }}>Limpar tudo</button>
            <button onClick={id ? handleUpdateSymptom : handleAddSymptom}>{id ? "Atualizar" : "Salvar"}</button>
            </div>
            <div className={styles.buttons_registro}>
            <button className={styles.btn_registro}><Link href="/salvos">VER SALVOS</Link></button>
            <button className={styles.btn_registro}><a>GERAR RELATÓRIO</a></button>
            </div>
        </div>
        </section>
        <footer className={styles.rodape}>
        <div className={styles.rodape1}>
            <li><Link href="/home"><img src="../imgs/icon-home.svg" className={styles.img_footer} /></Link></li>
        </div>
        <div className={styles.rodape1}>
            <li><Link href="/salvos"><img src="../imgs/icon-salvos.svg" className={styles.img_footer} /></Link></li>
        </div>
        <div className={styles.rodape1}>
            <li><Link href="/registrar"><img src="../imgs/icon-registrar.svg" className={styles.img_footer} /></Link></li>
        </div>
        <div className={styles.rodape1}>
            <li><Link href="/hospitais"><img src="../imgs/icon-med.svg" className={styles.img_footer} /></Link></li>
        </div>
        </footer>
    </div>
    </main>
);
}
