import { Link } from "react-router-dom"
export default function CardContato(props) {
    return (
        <>
            <div className="container border m-3 card justify-content-around">
                { <h4
                    className="text-center mt-3"
                > Contato {props.contato.id} </h4> }
                <div className="mt-3">
                <p> Nome: <span> {props.contato.nome} </span> </p>
                <p> Email: <span> {props.contato.email} </span> </p>
                <p> Fone: <span> {props.contato.celular} </span> </p>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                    <Link to={`/contato/${props.contato.id}`}
                        className="btn btn-outline-primary text-decoration-none"
                    > Editar </Link>
                    <Link to={`/contato/excluir/${props.contato.id}`}
                        className="btn btn-outline-danger text-decoration-none"
                    > Excluir </Link>
                </div>
            </div>
        </>
    )
}