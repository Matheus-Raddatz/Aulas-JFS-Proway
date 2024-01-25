import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
export default function ExcluiLocal() {
    const [id, setId] = useState('')
    const { idLocal } = useParams()
    const navigate = useNavigate()
    function excluir() {
        fetch(`http://localhost:3000/locais/${idLocal}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(x => navigate('/local/consultar'))
    }
    return (
        <>
            <div className="container text-center mt-5">
                <h2> Tem certeza que deseja excluir esse local? </h2>
                <div className="d-flex justify-content-evenly mt-5">
                    <Link to={`/local/consultar`}
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