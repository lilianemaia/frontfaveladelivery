import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Login } from './components/pages/Login/Login';
import Cadastro from './components/pages/Cadastro/Cadastro';
import Perfil from './components/pages/Perfil/Perfil';
import AvaliacaoCliente from './components/pages/Avaliacao/AvaliacaoCliente';
import Cadastrocliente from './components/pages/Cadastrocliente/Cadastrocliente';
import Cadastroempresaria from './components/pages/Cadastroempresaria/Cadastroempresaria';
import Cadastroentregadora from './components/pages/Cadastroentregadora/Cadastroentregadora';
import Quemsomos from './components/pages/Quemsomos/Quemsomos';
import Pedidos from './components/pages/Pedidos/Pedidos';
import Home from './components/pages/Home/Home';
import Cadastrovazio from './components/pages/Cadastrovazio/Cadastrovazio';
import Contato from './components/pages/Contato/Contato';

ReactDOM.render(
  <React.StrictMode>

    <App />
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Cadastro" element={<Cadastro />}></Route>
        <Route path="/Perfil" element={<Perfil />}></Route>
        <Route path="/AvaliacaoCliente" element={<AvaliacaoCliente />}></Route>
        <Route path="/Cadastrocliente" element={<Cadastrocliente />}></Route>
        <Route path="/Cadastroempresaria" element={<Cadastroempresaria />}></Route>
        <Route path="/Cadastroentregadora" element={<Cadastroentregadora />}></Route>
        <Route path="/Quemsomos" element={<Quemsomos />}></Route>
        <Route path="/Pedidos" element={<Pedidos/>}></Route>     
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Cadastrovazio" element={<Cadastrovazio />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
)
