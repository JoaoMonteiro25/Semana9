import api from './api';
import { Produto } from '../types/produto';
import { getTokenAcesso } from '../utils/tokenAcesso';

export async function listarProdutos(): Promise<Produto[]> {
  const response = await api.get('/produtos',
    {
      headers: {
        Authorization: `Bearer ${getTokenAcesso()}`
      }
    });
  return response.data;
}

export async function cadastrarProduto(produto: Produto): Promise<void> {
  await api.post('/produtos', produto,
    {
      headers: {
        Authorization: `Bearer ${getTokenAcesso()}`
      }
    });
}