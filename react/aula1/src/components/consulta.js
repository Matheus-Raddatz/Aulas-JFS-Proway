import contatos from "./dados"
export default function Consulta(dados) {
    return (
        <div className="container">
            <table className="table table-stripped">
                <thead className>
                    <tr>
                        <th> ID </th>
                        <th> Nome </th>
                        <th> Email </th>
                        <th> Fone </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contatos.map((ct) => {
                            return (
                                <tr>
                                    <td>{ct.id}</td>
                                    <td>{ct.nome}</td>
                                    <td>{ct.email}</td>
                                    <td>{ct.fone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}