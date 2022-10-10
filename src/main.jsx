import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
import NuevoCliente , {action as nuevoClienteAction} from './paginas/NuevoCliente'
import Inicio, { loader as clienteLoader } from './paginas/Inicio'
import { ErrorPage } from './components/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />,
        loader: clienteLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction
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
