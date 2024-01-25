import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import LoginContext from "../contextos/LoginContext"

export default function EditaContato() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[celular, setCelular] = useState('')

    const { idContato } = useParams()
    const login = useContext(LoginContext)
    useEffect(()=>{
        if(!login)
        navigate('/user/login')
    },[])
    
    const navigate = useNavigate()

    useEffect(()=>{
      fetch(`http://localhost:3000/contatos/${idContato}`)
      .then(data => data.json())
      .then(response => {
        setNome(response.nome)
        setEmail(response.email)
        setCelular(response.celular)
      })
    },[])

    function gravar(){
        fetch(`http://localhost:3000/contatos/${idContato}`,{
            method:'PUT',
            body: JSON.stringify({id: idContato, nome, email, celular}),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(x => navigate('/contato/consultar'))        
    }
    return (
        <div className="container mt-3">
            <h2 className="text-center">Edição do contato { idContato }</h2>
           <hr />
             <div>
                <label className="form-label">Informe nome</label>
                <input 
                   className="form-control mb-3"
                   type="text" 
                   placeholder="Informe nome"
                   value={nome}
                   onChange={txt => setNome(txt.target.value)}
                 />

              <label className="form-label">Informe email</label>
                <input 
                   className="form-control mb-3"
                   type="text"                    
                   placeholder="Informe email"
                   value={email}
                   onChange={txt => setEmail(txt.target.value)}
                 />

             <label className="form-label">Informe celular</label>
                <input 
                  className="form-control mb-3"
                   type="text" 
                   placeholder="Informe celular"
                   value={celular}
                   onChange={txt => setCelular(txt.target.value)}
                 />

                 <button 
                  className="btn btn-outline-primary"
                 onClick={gravar}>Gravar</button>
            </div>              
        </div>
    )
}