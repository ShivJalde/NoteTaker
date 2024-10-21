import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider } from 'notistack'
import { Box } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box className='main-entire-html'>

      <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} style={{
        fontWeight: '300'
      }}>
        <App />
      </SnackbarProvider >

    </Box>
  </StrictMode>,
)
