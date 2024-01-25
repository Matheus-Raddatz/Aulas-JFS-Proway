import './App.css'
import { Outlet, Link } from 'react-router-dom';
function App() {
  return (
    <div className="container">
      <h1 className='text-center'>Agenda de Compromissos</h1>
      <hr></hr>
      <nav className='navbar'>
        <Link className="nav-item text-decoration-none btn btn-outline-secondary mb-1"
          to="/user/login"
        >Login</Link>

        <Link className="nav-item text-decoration-none btn btn-outline-secondary mb-1"
          to="/contato/cadastrar"
        >Novo Contato</Link> &nbsp;

        <Link className="nav-item text-decoration-none btn btn-outline-secondary mb-1"
          to="/contato/consultar"
        >Consultar Contatos</Link> &nbsp;

        <Link className="nav-item text-decoration-none btn btn-outline-secondary mb-1"
          to="/local/cadastrar"
        >Novo Local</Link> &nbsp;

        <Link className="nav-item text-decoration-none btn btn-outline-secondary mb-1"
          to="/local/consultar"
        >Consultar Locais</Link> &nbsp;

        <Link className="nav-item text-decoration-none btn btn-outline-secondary mb-1"
          to="/agendamento/cadastro"
        >Novo Agendamento</Link>

        <Link className='nav-item text-decoration-none btn btn-outline-secondary mb-1'
          to="/agendamento/consulta"
        >Consultar Agendamentos</Link>
      </nav>
      <hr></hr>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default App;