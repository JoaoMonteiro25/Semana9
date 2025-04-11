
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

export default function Menu ()  {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/usuarios/cadastro">Cadastro de Usuários</Link></li>
        <li><Link to="/usuarios">Lista de Usuários</Link></li>
        <li><Link to='/produtos/cadastro'>Cadastro de Produtos</Link></li>
        <li><Link to='/produtos'>Lista de Produtos</Link></li>


      </ul>
    </nav>
  );
};
 