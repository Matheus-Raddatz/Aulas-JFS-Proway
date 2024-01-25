import { Link } from "react-router-dom"
export default function CardAgendamento(props) {
    return (
        <>
            <div className="container border m-3 card justify-content-around">
                { <h4
                    className="text-center mt-3"
                > Agendamento {props.agendamento.id} </h4> }
                <div className="mt-3">
                <p> Contato: <span> {props.agendamento.contato} </span> </p>
                <p> Local: <span> {props.agendamento.local} </span> </p>
                <p> Data: <span> {props.agendamento.data} </span> </p>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                    <Link to={`/agendamento/${props.agendamento.id}`}
                        className="btn btn-outline-primary text-decoration-none"
                    > Editar </Link>
                    <Link to={`/agendamento/excluir/${props.agendamento.id}`}
                        className="btn btn-outline-danger text-decoration-none"
                    > Excluir </Link>
                </div>
            </div>
        </>
    )
}