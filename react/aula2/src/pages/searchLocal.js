import { useEffect, useState, useContext } from "react"
import CardLocal from "../componentes/cardLocal"
import LoginContext from "../contextos/LoginContext"
import { useNavigate } from "react-router-dom"

export default function SearchLocal() {
    const [lista, setLista] = useState([])
    const login = useContext(LoginContext)
    const navigate = useNavigate()
    useEffect(()=>{
        getDados()
        if(!login)
        navigate('/user/login')
    },[])

    function getDados() {
        fetch('http://localhost:3000/locais')
            .then(data => data.json())
            .then(response => setLista(response))
            .catch(error => console.log(error))
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Lista de locais</h1>
            <div className="d-flex flex-wrap">
                {
                    lista.map((lc) => {
                        return (
                            <CardLocal
                                local={lc}
                            />
                        )
                    })
                }</div>
        </div>
    )
}