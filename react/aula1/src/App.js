import logo from './logo.svg';
import './App.css';
import Gallery from './components/gallery';
import Cadastro from './components/cadastro';
import Consulta from './components/consulta';
import Interacao from './components/interacao';
import Resultado from './components/resultado';
function App() {
  return (
    <body className="bg-secondary">
      <div className="container">
        <div className="bg-primary-subtle">
          <hr></hr>
          <h1 className="text-center"> Amazing Scientists </h1>
          <hr></hr>
          <Gallery />
          <hr></hr>
        </div>
        <div className="bg-secondary-subtle">
          <hr></hr>
          <h1 className="text-center"> Página de cadastro </h1>
          <hr></hr>
          <Cadastro />
          <hr></hr>
        </div>
        <div className="bg-success-subtle">
          <hr></hr>
          <h1 className="text-center"> Página de consulta </h1>
          <hr></hr>
          <Consulta />
          <hr></hr>
        </div>
        <div className="bg-danger-subtle">
          <hr></hr>
          <h1 className="text-center"> Página de interação </h1>
          <hr></hr>
          <Interacao />
          <hr></hr>
        </div>
      </div>
    </body>
  );
}
export default App;