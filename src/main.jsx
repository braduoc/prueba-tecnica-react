import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UsuariosProviber } from './context/UsuariosProviber.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuariosProviber>
      <App />
    </UsuariosProviber>
  </StrictMode>,
)
