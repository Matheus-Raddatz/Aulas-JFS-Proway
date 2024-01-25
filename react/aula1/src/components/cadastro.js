import contatos from "./dados"
import { useState } from "react"
export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    function abroba() {
        alert("Abóbora Doce")
    }
    function gravar() {
        let ct = {
            id: contatos.length + 1,
            nome: nome,
            email: email,
            fone: fone
        }
        contatos.push(ct)
        abroba()
        window.location.reload()
    }
    return (
        <div className="container">
            <h1></h1>
            <div className="mb-2">
                <label
                    className="form-label"
                    for="nome"
                > Nome: </label>
                <input
                    type="text"
                    placeholder="Informe o Nome"
                    className="form-control"
                    id="nome"
                    value={nome}
                    onChange={(txt) => setNome(txt.target.value)}
                />
            </div>
            <div className="mb-2">
                <label
                    className="form-label"
                    for="email"
                > Email: </label>
                <input
                    type="text"
                    placeholder="Informe o Email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(txt) => setEmail(txt.target.value)}
                />
            </div>
            <div>
                <label
                    className="form-label"
                    for="fone"
                > Fone: </label>
                <input
                    type="text"
                    placeholder="Informe o Fone"
                    className="form-control"
                    id="fone"
                    value={fone}
                    onChange={(txt) => setFone(txt.target.value)}
                />
            </div>
            <div className="mt-2 d-flex justify-content-around">
                <button
                    className="btn btn-outline-primary"
                    onClick={gravar}
                > Salvar </button>
                <button
                    className="btn btn-outline-danger"
                > Cancelar </button>
            </div>
        </div>
    )
}