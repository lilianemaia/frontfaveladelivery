import api from '../../../api';
import React, { useRef } from 'react';
import '../../Formularioscadastro/Formcadcliente/Formcadcliente.css'
import { useNavigate } from 'react-router-dom';

const Formcardcliente = () => {
    const nomecompletoCliente = useRef()
    const cpfCliente = useRef()
    const enderecoCliente = useRef()
    const emailCliente = useRef()
    const telefoneCliente = useRef()
    const loginCliente = useRef()
    const senhaCliente = useRef()

    const navigate = useNavigate()

    function enviarDados(event) {

        event.preventDefault()
        console.log(nomecompletoCliente.current.value)
        api.post("/cadastrocliente/", {
            nomecompleto: nomecompletoCliente.current.value,
            cpf: cpfCliente.current.value,
            enderecocompleto: enderecoCliente.current.value,
            email: emailCliente.current.value,
            telefone: telefoneCliente.current.value,
            login: loginCliente.current.value,
            senha: senhaCliente.current.value,
        }).then((res) => console.log(res)).catch((err) => console.log(err))
        navigate('/Login')

    }


    return (
        <div className="divPrincipal">
            <div className='containercadastro'>
                <form className='form-control' onSubmit={enviarDados}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Nome Completo</label>
                            <input type="text" className="form-control" ref={nomecompletoCliente} placeholder="Digite aqui seu nome completo..." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>CPF</label>
                            <input type="text" className="form-control" ref={cpfCliente} placeholder="Só números sem pontos" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Endereço completo</label>
                            <input type="text" className="form-control" ref={enderecoCliente} placeholder="Rua, nºx, apt y.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Email</label>
                            <input type="text" className="form-control" ref={emailCliente} placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Telefone</label>
                            <input type="text" className="form-control" ref={telefoneCliente} placeholder="DDDxxxxx sem () ou -" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Login</label>
                            <input type="text" className="form-control" ref={loginCliente} placeholder="Login" />
                        </div>
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Senha</label>
                            <input type="text" className="form-control" ref={senhaCliente} placeholder="Senha" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary botaoprincipal" >Enviar!</button>
                </form>
            </div >
        </div >
    );
}
export default Formcardcliente;