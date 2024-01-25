import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import LoginContext from "../contextos/LoginContext"

export default function CadContato() {
    const [contato, setContato] = useState('')
    const [local, setLocal] = useState('')
    const [data, setData] = useState('')
    const navigate = useNavigate()

    const login = useContext(LoginContext)
    useEffect(()=>{
        if(!login)
        navigate('/user/login')
    },[])

    function gravar() {
        fetch('http://localhost:3000/agendamentos', {
            method: 'POST',
            body: JSON.stringify({ contato, local, data }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(x => navigate('/agendamento/consulta'))
    }
    return (
        <div className="container mt-3">
            <h2 className="text-center">Pagina de agendamento</h2>
            <hr />
            <div>
                <label className="form-label">Informe contato/s</label>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Informe contato"
                    value={contato}
                    onChange={txt => setContato(txt.target.value)}
                />

                <label className="form-label">Informe local</label>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Informe local"
                    value={local}
                    onChange={txt => setLocal(txt.target.value)}
                />

                <label className="form-label">Informe data</label>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Informe data"
                    value={data}
                    onChange={txt => setData(txt.target.value)}
                />

                <button
                    className="btn btn-outline-primary"
                    onClick={gravar}>Gravar</button>
            </div>
        </div>
    )
}