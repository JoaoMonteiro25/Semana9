import api from './api';
import { Autenticacao } from '../types/autenticacao';
import {RespostaAutenticacao} from '../interfaces/IRespostaAutenticacao';

export async function realizarLogin(dados: Autenticacao): Promise<RespostaAutenticacao> {
  const response = await api.post<RespostaAutenticacao>('/autenticacao/login', dados);
  return response.data;
}