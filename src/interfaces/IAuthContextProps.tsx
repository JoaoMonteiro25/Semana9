import { Autenticacao } from '../types/autenticacao';

export interface AuthContextProps {
  token: string | null;
  login: (dados: Autenticacao) => Promise<boolean>;
  logout: () => void;
  estaAutenticado: boolean;
}