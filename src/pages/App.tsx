import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu/menu';
import React from 'react';
import CadastroProduto from './Produto/CadastroProduto';
import CadastroUsuario from './Usuario/CadastroUsuario';
import ListaProdutos from '../pages/Produto/ListaProduto';
import Autenticacao from './Autenticacao';
import ListaUsuarios from './Usuario/ListaUsuario';


export default function App() {
  return (
    <Router>
      <div className='App'>
        <Menu />
        <div>
          <h1>Bem-vindo 
            !</h1>
          <p>Gerencie usuários e produtos de forma simples e eficiente.</p>
        </div>
        <Routes>
          <Route path='/' element={<Autenticacao />} />
          <Route path='/usuarios/cadastro' element={<CadastroUsuario />} />
          <Route path='/usuarios' element={<ListaUsuarios />} />
          <Route path='/produtos/cadastro' element={<CadastroProduto />} />
          <Route path='/produtos' element={<ListaProdutos />} />
        </Routes>
      </div>
    </Router>
  );
}