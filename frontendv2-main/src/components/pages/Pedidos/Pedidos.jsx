import React from "react";
import styles from "../Pedidos/Pedidos.css";
import Footer from "../../Footer/Footer";
import Alimentos from "../../img/ft-alimentos.png";
import Artesanatos from "../../img/ft-artesanatos.png";
import Eletronicos from "../../img/ft-eletronicos.png";
import Header from '../../Header/Header';




function Pedidos() {
  return (
    <>
      <Header />
      <main className="pedidos">
        <div>
          <h2 className="pedidosTitulo">Pedidos</h2>
          <p className="pedidoParagrafo">Encurtamos distâncias e viabilizamos negócios</p>
          <div className="boxpedidos">
            <div className="alignnone">
              <img src={Alimentos} alt="" />
              <h4 className="pedidosTitulo">Alimentos</h4>
              <p className="pedidoParagrafo">Pizza Família Muçarela</p>
            </div>
            <div className={styles.alignnone}>
              <img src={Artesanatos} alt="" />
              <h4 className="pedidosTitulo">Artesanatos</h4>
              <p className="pedidoParagrafo">Bolsa em crochê Azul e Branca</p>
            </div>
            <div className={styles.alignnone}>
              <img src={Eletronicos} alt="" />
              <h4 className="pedidosTitulo">Eletrônicos</h4>
              <p className="pedidoParagrafo">Tablet, Celular e Relógio Smartwatch</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Pedidos;
