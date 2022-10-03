import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
import NuevoCliente from './paginas/NuevoCliente'
import Inicio, { loader as clienteLoader } from './paginas/Inicio'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
        loader: clienteLoader
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />
      }
    ]
  },
  {

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
