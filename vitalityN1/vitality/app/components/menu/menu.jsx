import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <nav className="nav-bar">
        <div className="logo">
          <img src="../logo.png" alt="Logo" />
        </div>

        <div className="nav-list">
          <ul>
            <li className="nav-item"><Link to="/" className="nav-link"> HOME </Link></li>
            <li className="nav-item"><Link to="/editar" className="nav-link"> CADASTRE-SE </Link></li>
            <li className="nav-item"><Link to="/sobre" className="nav-link"> SOBRE-NÓS </Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
