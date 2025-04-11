import React from 'react';
import Botao from '../botao';
import style from './Formulario.module.scss';
import { PropsFormulario } from '../../types/formularioBase';


export default function FormularioBase<T>({
  campos,
  valores,
  setValores,
  onSubmit,
  tituloBotao = 'Salvar',
}: PropsFormulario<T>) {
  const handleChange = (campo: keyof T) =>
    (evento: React.ChangeEvent<HTMLInputElement>) => {
      setValores({ ...valores, [campo]: evento.target.value });
    };

  return (
    <form className={style.novoFormularioBase} onSubmit={onSubmit}>
      {campos.map((campo) => (
        <div className={style.inputContainer} key={String(campo.nome)}>
          <label htmlFor={String(campo.nome)}>{campo.label}</label>
          <input
            type={campo.tipo}
            name={String(campo.nome)}
            id={String(campo.nome)}
            placeholder={campo.placeholder}
            value={valores[campo.nome] as string}
            onChange={handleChange(campo.nome)}
            required={campo.required}
          />
        </div>
      ))}

      <div className={style.inputContainer}>
        <Botao>{tituloBotao}</Botao>
      </div>
    </form>
  );
}