import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import style from './ListarUsuarios.module.scss';

function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get('/usuarios')
      .then((response) => setUsuarios(response.data))
      .catch((error) => console.error('Erro ao buscar usuários', error));
  }, []);

  return (
    <div className={style.listarUsuarios}>
      <h1>Lista de Usuários</h1>
      {usuarios.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario: any) => (
              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={style.emptyState}>Não existe usuário cadastrado.</p>
      )}
    </div>
  );
}

export default ListarUsuarios;