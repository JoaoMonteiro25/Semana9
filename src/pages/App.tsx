import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from '../components/Formulario';
import ListarUsuarios from './ListarUsuarios/ListarUsuarios';
import Menu from '../components/Menu/menu';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Menu />
      <Routes>
          <Route path="/cadastro" element={<Formulario />} />
          <Route path="/usuarios" element={<ListarUsuarios />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
