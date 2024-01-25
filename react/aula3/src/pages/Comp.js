import { useContext } from "react";
import ContatoContext from "../contextos/contatoContext";

export default function Comp( ) {
  const { nome, idade }  = useContext(ContatoContext)
  return ( 
    <div className="App">
        <h1>Comp 1</h1> 
        <p>Nome: { nome }</p> 
        <p>Idade: {idade}</p>      
    </div>
  );
}