import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState('ana@gmail.com')
    const [senha, setSenha] = useState('123')
    const [usuarios, setUsuarios] = useState([])

    function handleLogar() {
        var userConectado = ''
        fetch('http://localhost:3000/usuarios')
            .then(data => data.json())
            .then(response => {
                setUsuarios(response)
                usuarios.forEach((user) => {
                    if (user.email === email && user.senha === senha)
                        userConectado = user
                })
                
                if (userConectado !== '') {
                    localStorage.setItem('login', userConectado.email)
                }
                else{
                    console.log('Login inválido!')
                }
            })
    }

    return (
        <div className="container mt-5">
            <label className="form-label">Informe seu email</label>

            <input
                className="form-control"
                type="text"
                value={email}
                onChange={(txt) => setEmail(txt.target.value)}
                placeholder="Informe seu email"
            />
            <label className="form-label">Informe seu senha</label>
            <input
                className="form-control"
                type="password"
                value={senha}
                onChange={(txt) => setSenha(txt.target.value)}
                placeholder="Informe seu email"
            />

            <div className="mt-2 d-flex justify-content-between">
                <button
                    onClick={handleLogar}
                    className="btn btn-outline-primary">
                    Logar
                </button>
                <Link to={`/user/cadastro`}
                        className="btn btn-outline-warning text-decoration-none"
                    > Registrar </Link>
            </div>
        </div>
    )
}