import { useState, useContext, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import LoginContext from "../contextos/LoginContext"

export default function CadUser() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()
  const login = useContext(LoginContext)
    useEffect(()=>{
        if(!login)
        navigate('/user/login')
    },[])

  function gravar() {
    fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      body: JSON.stringify({ email, senha }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(x => navigate('/'))
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">Pagina de usuario</h2>
      <hr />
      <div>

        <label className="form-label">Informe email</label>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Informe email"
          value={email}
          onChange={txt => setEmail(txt.target.value)}
        />

        <label className="form-label">Informe senha</label>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Informe senha"
          value={senha}
          onChange={txt => setSenha(txt.target.value)}
        />
        <div className="mt-2 d-flex justify-content-between">
          <button
            className="btn btn-outline-primary"
            onClick={gravar}>Gravar</button>

          <Link to={`/user/login`}
            className="btn btn-outline-warning text-decoration-none"
          > Login </Link>
        </div>
      </div>
    </div>
  )
}