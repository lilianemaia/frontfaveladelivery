import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import '../../index.css';
import Logo from '../img/logo.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid men ">
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav navbaixa">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
                <Link to="/Quemsomos" className="nav-link ">
                  Quem Somos
                </Link>
                <Link to="/Pedidos" className="nav-link ">
                  Pedidos
                </Link>
                <Link to="/Cadastro" className="nav-link ">
                  Cadastro
                </Link>
                <Link to="/Contato" className="nav-link ">
                  Contato
                </Link>
                <Link to="/Login" className="nav-link ">
                  Login
                </Link>
              </div>
              <div class="icons">
                <ul>
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
