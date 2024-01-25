import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import LoginContext from "../contextos/LoginContext"

export default function EditaLocal() {
    const[rua, setRua] = useState('')
    const[bairro, setBairro] = useState('')
    const[cidade, setCidade] = useState('')

    const { idLocal } = useParams()
    const login = useContext(LoginContext)
    useEffect(()=>{
        if(!login)
        navigate('/user/login')
    },[])
    
    const navigate = useNavigate()

    useEffect(()=>{
      fetch(`http://localhost:3000/locais/${idLocal}`)
      .then(data => data.json())
      .then(response => {
        setRua(response.rua)
        setBairro(response.bairro)
        setCidade(response.cidade)
      })
    },[])

    function gravar(){
        fetch(`http://localhost:3000/locais/${idLocal}`,{
            method:'PUT',
            body: JSON.stringify({id: idLocal, rua, bairro, cidade}),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(x => navigate('/local/consultar'))        
    }
    return (
        <div className="container mt-3">
            <h2 className="text-center">Edição do Local { idLocal }</h2>
           <hr />
             <div>
                <label className="form-label">Informe rua</label>
                <input 
                   className="form-control mb-3"
                   type="text" 
                   placeholder="Informe rua"
                   value={rua}
                   onChange={txt => setRua(txt.target.value)}
                 />

              <label className="form-label">Informe Bairro</label>
                <input 
                   className="form-control mb-3"
                   type="text"                    
                   placeholder="Informe bairro"
                   value={bairro}
                   onChange={txt => setBairro(txt.target.value)}
                 />

             <label className="form-label">Informe cidade</label>
                <input 
                  className="form-control mb-3"
                   type="text" 
                   placeholder="Informe cidade"
                   value={cidade}
                   onChange={txt => setCidade(txt.target.value)}
                 />

                 <button 
                  className="btn btn-outline-primary"
                 onClick={gravar}>Gravar</button>
            </div>              
        </div>
    )
}