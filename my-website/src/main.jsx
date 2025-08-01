import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cursor from './components/CustomCursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cursor/>
    <App />
  </StrictMode>,
)
