import React from 'react';
import Botao from '../botao';
import style from './Formulario.module.scss';
import axios from  'axios';


class Formulario extends React.Component {
    state={
        Nome:"",
        Email:"",
        Senha:"" 
    };

    async adicionarUsuario(evento: React.FormEvent<HTMLElement>) {
        evento.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/usuarios', {
              nome: this.state.Nome,
              email: this.state.Email,
              senha: this.state.Senha
            });
      
            console.log('Usuário cadastrado :', response.data);
            
            this.setState({ nome: "", email: "", senha: "" });
      
            alert('Usuário cadastrado!');
          } catch (error) {
            console.error('Erro no cadastrar do usuário:', error);
            alert('Erro no cadastro do usuário');
          }
        }
      
        render() {
          return (
            <form className={style.novoUsuario} onSubmit={this.adicionarUsuario.bind(this)}>
              <div className={style.inputContainer}>
                <label htmlFor="nome">Nome usuário</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={this.state.Nome}
                  onChange={(evento) => this.setState({ nome: evento.target.value })}
                  placeholder="Nome do Usuário"
                  required
                />
              </div>
              
              <div className={style.inputContainer}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.Email}
                  onChange={(evento) => this.setState({ email: evento.target.value })}
                  placeholder="E-mail do Usuário"
                  required
                />
              </div>
      
              <div className={style.inputContainer}>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  value={this.state.Senha}
                  onChange={(evento) => this.setState({ senha: evento.target.value })}
                  required
                />
              </div>
              <div className={style.inputContainer}>
                <Botao>Cadastrar</Botao>
              </div>
            </form>
          );
        }
      }

export default Formulario;