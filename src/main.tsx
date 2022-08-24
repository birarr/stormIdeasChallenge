import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { queryClient } from './services/queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
