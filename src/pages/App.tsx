import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario from '../components/Formulario';
import ListarUsuarios from './ListarUsuarios/ListarUsuarios';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/cadastro" element={<Formulario />} />
          <Route path="/usuarios" element={<ListarUsuarios />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
