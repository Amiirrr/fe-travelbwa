import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router'

import '@/assets/scss/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
