import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Script from './Script.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>

      <Script/>

    </BrowserRouter>

  </StrictMode>
)
