import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router'
import { ThemeContextProvider } from './Context/ThemeContext'
import AuthContextProvider from './Context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthContextProvider>
        <ThemeContextProvider>
           <Router/>
        </ThemeContextProvider>
   </AuthContextProvider>
)