import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Pedro Vivarini. Todos os direitos reservados.</p>
      <p>Uma loja simples para pessoas simples.</p>
    </footer>
  );
};

export default Footer;