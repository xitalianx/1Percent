import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App';
import { TransactionsProvider } from "./context/transactionContext";
import './global.css'


const rootElement = document.getElementById('root');
const root=createRoot(rootElement)

root.render(
  <StrictMode>
  <TransactionsProvider>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </TransactionsProvider>
  </StrictMode>
)
