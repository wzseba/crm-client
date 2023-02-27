import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
import NuevoCliente , {action as nuevoClienteAction} from './paginas/NuevoCliente'
import Inicio, { loader as clientesLoader } from './paginas/Inicio'
import { ErrorPage } from './components/ErrorPage'
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from './paginas/EditarCliente'
import {action as eliminarClienteAction } from './components/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
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
