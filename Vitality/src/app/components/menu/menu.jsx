"use client"
import Link from 'next/link';
import './menu.css'

function Menu() {
  return (
    <div className="menu">
      <nav className="nav-bar">
        <div className="logo">
          
          <img src="../imgs/logo.png" alt="Logo" /><Link href="/page" className="nav-link"> </Link>
        </div>

        <div className="nav-list">
          <ul>
            <li className="nav-item"><Link href="../components/home" className="nav-link"> HOME </Link></li>
            <li className="nav-item"><Link href="../components/login" className="nav-link"> CADASTRE-SE </Link></li>
            <li className="nav-item"><Link href="../components/sobre" className="nav-link"> SOBRE-NÓS </Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
