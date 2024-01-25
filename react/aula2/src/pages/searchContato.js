import { useEffect, useState, useContext } from "react"
import CardContato from "../componentes/cardContato"
import LoginContext from "../contextos/LoginContext"
import { useNavigate } from "react-router-dom"

export default function SearchContato() {
    const [lista, setLista] = useState([])
    const login = useContext(LoginContext)
    const navigate = useNavigate()
    useEffect(()=>{
        getDados()
        if(!login)
        navigate('/user/login')
    },[])

    function getDados() {
        fetch('http://localhost:3000/contatos')
            .then(data => data.json())
            .then(response => setLista(response))
            .catch(error => console.log(error))
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Lista de contatos</h1>
            <div className="d-flex flex-wrap">
                {
                    lista.map((ct) => {
                        return (
                            <CardContato
                                contato={ct}
                            />
                        )
                    })
                }</div>
        </div>
    )
}