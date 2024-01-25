import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Agendamento from './pages/cadAgendamento';
import ErrorMsg from './pages/errorMsg';
import CadContato from './pages/cadContato';
import SearchContato from './pages/searchContato';
import EditaContato from './pages/editaContato ';
import ExcluiContato from './pages/excluiContato';
import CadLocal from './pages/cadLocal';
import SearchLocal from './pages/searchLocal';
import EditaLocal from './pages/editaLocal';
import ExcluiLocal from './pages/excluiLocal';
import App from './App';
import LoginContext from './contextos/LoginContext';
import Login from './pages/logUsuario';
import CadUser from './pages/cadUsuario';
import SearchAgendamento from './pages/searchAgendamento';
import ExcluiAgendamento from './pages/excluiAgendamento';

const router = createBrowserRouter([
  {
    path: '/', element:<App />,
    errorElement: <ErrorMsg />,
    children:[
      {
        path: 'contato/cadastrar', element: <CadContato />
      },
      {
        path: 'contato/consultar', element: <SearchContato />
      },
      {
        path: 'contato/:idContato', element: <EditaContato />
      },
      {
        path: 'contato/excluir/:idContato', element: <ExcluiContato />
      },
      {
        path: 'local/cadastrar', element: <CadLocal />
      },
      {
        path: 'local/consultar', element: <SearchLocal />
      },
      {
        path: 'local/:idLocal', element: <EditaLocal />
      },
      {
        path: 'local/excluir/:idLocal', element: <ExcluiLocal />
      },
      {
        path: 'agendamento/cadastro', element: <Agendamento />
      },
      {
        path: 'agendamento/consulta', element: <SearchAgendamento />
      },
      {
        path: 'agendamento/excluir/:idAgendamento', element: <ExcluiAgendamento />
      },
      {
        path: 'user/login', element: <Login />
      },
      {
        path: 'user/cadastro', element: <CadUser />
      }
    ]
  }  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContext.Provider 
      value={localStorage.getItem('login')}
    >
        <RouterProvider router={router}/>
    </LoginContext.Provider>    
  </React.StrictMode>
);