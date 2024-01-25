import { useState } from 'react'
import Resultado from './resultado'
export default function Interacao() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [idade, setIdade] = useState('')
    const [maimen, setMaimen] = useState('')
    let a
    function handleEvent() {
        let maimenmsg = ""
        if (idade == "") {
            alert("Informe a idade")
        } else if (idade > 18) {
            maimenmsg = "maior"
        } else {
            maimenmsg = "menor"
        }
        setMaimen(maimenmsg)
    }
    return (
        <div className="container">
            <div>
                <label for="nome" className="form-label"> Nome: </label>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    className="form-control mb-2"
                    onChange={(txt) => setNome(txt.target.value)}
                />
            </div>
            <div>
                <label for="sobrenome" className="form-label"> Sobrenome: </label>
                <input
                    type="text"
                    placeholder="Digite seu sobrenome"
                    className="form-control mb-2"
                    onChange={(txt) => setSobrenome(txt.target.value)}
                />
            </div>
            <div>
                <label for="idade" className="form-label"> Idade: </label>
                <input
                    type="text"
                    placeholder="Digite sua idade"
                    className="form-control"
                    onChange={(txt) => setIdade(txt.target.value)}
                />
            </div>
            <div className="mt-2">
                <button
                    onClick={handleEvent}
                    className="btn btn-outline-primary"
                > Clique Aqui </button>
            </div>
            <hr></hr>
            {
                nome && sobrenome && idade && maimen !== '' ? 
                <Resultado
                    nome={nome}
                    sobrenome={sobrenome}
                    idade={idade}
                    maimen={maimen}
                /> : null
            }
        </div>
    )
}