import { Link } from "react-router-dom"
export default function CardLocal(props) {
    return (
        <>
            <div className="container border m-3 card justify-content-around">
                { <h4
                    className="text-center mt-3"
                > Local {props.local.id} </h4> }
                <div className="mt-3">
                <p> Rua: <span> {props.local.rua} </span> </p>
                <p> Bairro: <span> {props.local.bairro} </span> </p>
                <p> Cidade: <span> {props.local.cidade} </span> </p>
                </div>
                <div className="d-flex mb-3 justify-content-between">
                    <Link to={`/local/${props.local.id}`}
                        className="btn btn-outline-primary text-decoration-none"
                    > Editar </Link>
                    <Link to={`/local/excluir/${props.local.id}`}
                        className="btn btn-outline-danger text-decoration-none"
                    > Excluir </Link>
                </div>
            </div>
        </>
    )
}