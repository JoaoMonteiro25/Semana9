
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/cadastro">Cadastro de Usuários</Link></li>
        <li><Link to="/usuarios">Lista de Usuários</Link></li>
        <li><Link to='/'>Cadastro de Produtos</Link></li>
        <li><Link to='/'>Lista de Produtos</Link></li>


      </ul>
    </nav>
  );
};
export default Menu;