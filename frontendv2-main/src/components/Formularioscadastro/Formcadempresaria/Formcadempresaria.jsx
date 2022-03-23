import api from '../../../api';
import React, { useRef } from 'react';
import '../../Formularioscadastro/Formcadempresaria/Formcadempresaria.css'
import { useNavigate } from 'react-router-dom';

const Formcadempresaria = () => {
    const nomecompletoEmpresaria = useRef()
    const cpfEmpresaria = useRef()
    const enderecoEmpresaria = useRef()
    const emailEmpresaria = useRef()
    const telefoneEmpresaria = useRef()
    const loginEmpresaria = useRef()
    const senhaEmpresaria = useRef()

    const navigate = useNavigate()

    function enviarDados(event) {
        event.preventDefault()
        console.log(nomecompletoEmpresaria.current.value)
        api.post("/cadastroempresaria/", {
            nomecompleto: nomecompletoEmpresaria.current.value,
            cpf: cpfEmpresaria.current.value,
            enderecocompleto: enderecoEmpresaria.current.value,
            email: emailEmpresaria.current.value,
            telefone: telefoneEmpresaria.current.value,
            login: loginEmpresaria.current.value,
            senha: senhaEmpresaria.current.value,
        }).then((res) => console.log(res)).catch((err) => console.log(err))
        navigate('/Login')

    }

    return (
        <div className="divPrincipal">
            <div className='containercadastro'>
                <form onSubmit={enviarDados}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Nome Completo</label>
                            <input type="text" className="form-control" ref={nomecompletoEmpresaria} placeholder="Digite aqui seu nome completo..." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>CPF</label>
                            <input type="text" className="form-control" ref={cpfEmpresaria} placeholder="Só números sem pontos" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Endereço completo</label>
                            <input type="text" className="form-control" ref={enderecoEmpresaria} placeholder="Rua, nºx, apt y.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Email</label>
                            <input type="text" className="form-control" ref={emailEmpresaria} placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Telefone</label>
                            <input type="text" className="form-control" ref={telefoneEmpresaria} placeholder="DDDxxxxx sem () ou -" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Login</label>
                            <input type="text" className="form-control" ref={loginEmpresaria} placeholder="Login" />
                        </div>
                        <div className="form-group col-md-6">
                            <label className='labelcadastro'>Senha</label>
                            <input type="text" className="form-control" ref={senhaEmpresaria} placeholder="Senha" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar!</button>
                </form>
            </div >
        </div >

    );
}
export default Formcadempresaria;