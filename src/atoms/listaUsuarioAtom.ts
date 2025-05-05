
import { atom } from 'recoil';
import { Usuario } from '../types/Usuario';

export const listaUsuarioAtom = atom<Usuario[]>({
  key: 'listaUsuarioAtom',
  default: [],
});
