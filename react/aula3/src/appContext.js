import ContatoContext from "./contextos/contatoContext";
import Comp from "./pages/Comp";

export default function AppContext( ) {
    let obj = { nome: "maria", idade:50 }
    return (
       <ContatoContext.Provider
          value={obj}
       >
          <Comp />   
       </ContatoContext.Provider>
    );
  }