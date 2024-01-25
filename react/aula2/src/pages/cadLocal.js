import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoginContext from "../contextos/LoginContext"

export default function CadLocal() {
    const[rua, setRua] = useState('')
    const[bairro, setBairro] = useState('')
    const[cidade, setCidade] = useState('')
    
    const navigate = useNavigate()
    const login = useContext(LoginContext)
    useEffect(()=>{
        if(!login)
        navigate('/user/login')
    },[])

    function gravar(){
        fetch('http://localhost:3000/locais',{
            method:'POST',
            body: JSON.stringify({rua, bairro, cidade}),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then(x => navigate('/local/consultar')) 
       
       // navigate('/contato/consultar')    
    }
    return (
        <div className="container mt-3">
            <h2 className="text-center">Pagina de local</h2>
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

              <label className="form-label">Informe bairro</label>
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