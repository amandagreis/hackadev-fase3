import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { CarrinhoContextProvider } from "./components/Context/carrinhoProdutos"

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <CarrinhoContextProvider> 
    <App />
  </CarrinhoContextProvider>
 
  </React.StrictMode>
);
