import { atom } from 'recoil';
import { Usuario } from '../types/Usuario';

export const usuarioAtom = atom<Usuario>({
  key: 'usuarioAtom',
  default: {
    nome: '',
    email: '',
    senha: '',
  },
});