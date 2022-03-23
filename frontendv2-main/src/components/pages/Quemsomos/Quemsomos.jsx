/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import './Quemsomos.css';

export default () => {
  return (
    <>
      <Header />
      <main className="principal-quemsomos">
        <div className="titulo-quemsomos">
          <h1>Quem somos</h1>
          <p className="texto-quemsomos">
            Somos um grupo de alunos da ONG Recode Pro empenhados e em
            desenvolvimento, buscando evolução constante e a primeira
            oportunidade no mercado de trabalho na área de tecnologia,
            especificamente Full-Stack. Nosso projeto é voltado para a inclusão
            de mulheres moradoras de comunidades carentes que estão de certa
            forma excluídas por não conseguirem receber suas encomendas dentro
            de suas comunidades, visto que muitas empresas não conseguem
            adentrar nas comunidades e entregar os produtos dos mesmos. O
            objetivo é facilitar a comercialização de produtos e serviços dentro
            destas comunidades, focando especificamente mulheres que residem
            dentro destas comunidades.
          </p>
          <a href="../../Contato.jsx">
            <button className="btn-quemsomos" type="submit">
              Saiba Mais
            </button>
          </a>
        </div>
        <iframe
          className="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YIzfRbbga9A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </main>
      <Footer />
    </>
  );
};
