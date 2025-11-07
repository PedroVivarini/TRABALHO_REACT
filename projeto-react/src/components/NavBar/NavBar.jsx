import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.brand}>
        <Link to="/">MINIMALISTA</Link>
      </h2>
      <ul className={styles.links}>
        <li>
          <Link to="/">Loja</Link>
        </li>
        <li>
          <Link to="/new-product" className={styles.newBtn}>
            Adicionar Produto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;