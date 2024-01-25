import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
export default function ExcluiAgendamento() {
    const [id, setId] = useState('')
    const { idAgendamento } = useParams()
    const navigate = useNavigate()
    function excluir() {
        fetch(`http://localhost:3000/agendamentos/${idAgendamento}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(x => navigate('/agendamento/consulta'))
    }
    return (
        <>
            <div className="container text-center mt-5">
                <h2> Tem certeza que deseja excluir esse agendamento? </h2>
                <div className="d-flex justify-content-evenly mt-5">
                    <Link to={`/contato/consultar`}
                        className="btn btn-outline-primary text-decoration-none"
                    > Cancelar </Link>
                    <button
                        className="btn btn-outline-danger"
                        onClick={excluir}
                    > Excluir </button>
                </div>
            </div>
        </>
    )
}