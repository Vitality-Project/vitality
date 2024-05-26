import styles from '@/app/components/footer.module.css';
import Link from 'next/link'; 

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape1">
        <li>
          <Link href="/home">
            <img src="../imgs/icon-home.svg" className="img-footer" alt="Home Icon" />
          </Link>
        </li>
      </div>
      <div className="rodape1">
        <li>
          <Link href="/salvos">
            <img src="../imgs/icon-salvos.svg" className="img-footer" alt="Salvos Icon" />
          </Link>
        </li>
      </div>
      <div className="rodape1">
        <li>
          <Link href="/registrar">
            <img src="../imgs/icon-registrar.svg" className="img-footer" alt="Registrar Icon" />
          </Link>
        </li>
      </div>
      <div className="rodape1">
        <li>
          <Link href="/hospitais">
            <img src="../imgs/icon-med.svg" className="img-footer" alt="Med Icon" />
          </Link>
        </li>
      </div>
    </footer>
  );
}
