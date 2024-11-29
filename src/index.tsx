import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Script from './Script.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CurrencyProvider } from './context/CurrencyContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>

      <CurrencyProvider>

        <Script />

      </CurrencyProvider>

    </BrowserRouter>

  </StrictMode>
)
