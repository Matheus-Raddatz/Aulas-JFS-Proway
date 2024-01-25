import { useEffect, useState, useContext } from "react"
import CardAgendamento from "../componentes/cardAgendamento"
import LoginContext from "../contextos/LoginContext"
import { useNavigate } from "react-router-dom"

export default function SearchAgendamento() {
    const [lista, setLista] = useState([])
    const login = useContext(LoginContext)
    const navigate = useNavigate()
    useEffect(()=>{
        getDados()
        if(!login)
        navigate('/agendamento/cadastro')
    },[])

    function getDados() {
        fetch('http://localhost:3000/agendamentos')
            .then(data => data.json())
            .then(response => setLista(response))
            .catch(error => console.log(error))
    }

    return (
        <div className="container mt-3">
            <h1 className="text-center">Lista de agendamentos</h1>
            <div className="d-flex flex-wrap">
                {
                    lista.map((ag) => {
                        return (
                            <CardAgendamento
                                agendamento={ag}
                            />
                        )
                    })
                }</div>
        </div>
    )
}