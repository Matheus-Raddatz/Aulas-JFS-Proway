import { UseContext } from "react"
import ContatoContext from "../contextos/contatoContext"

export default function Comp() {
    const [nome, idade, time] = useContext(ContatoContext)
    return(
        <div>
            <h1>Comp1</h1>
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{time}</p>
        </div>
    )
}