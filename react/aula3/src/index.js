import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContatoContext from "./contextos/contatoContext";

let obj = { nome: "maria", idade:50 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContatoContext.Provider
          value={obj}
       >
        <App />
       </ContatoContext.Provider>    
  </React.StrictMode>
);


