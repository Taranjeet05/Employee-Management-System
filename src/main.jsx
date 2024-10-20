import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthCotext from './context/AuthContext.jsx'
import TaskContext from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthCotext>
      <TaskContext>
         <App /> 
      </TaskContext>
    </AuthCotext>
  </StrictMode>,
)
