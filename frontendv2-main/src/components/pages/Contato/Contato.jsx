import React from 'react';
import InputMask from 'react-input-mask';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import '../Contato/Contato.css';

export default class Contact extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <section className="main-container">
        <div className="formulario">
          <h1>Entre em contato conosco!</h1>
          <form
            name="form1"
            id="form1"
            method="post"
            action="/controllers/controllerForm.php"
          >
            <input type="text" name="nome" id="nome" placeholder="Nome:" />
            <InputMask
              type="tel"
              name="telefone"
              id="telefone"
              placeholder="Telefone:"
              mask="(99) 99999-9999"
            />
            <input type="email" name="email" id="email" placeholder="Email:" />
            <textarea
              name="mensagem"
              id="mensagem"
              placeholder="Mensagem:"
            ></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </section>
      <Footer/>
      </>
    );
  }
}
