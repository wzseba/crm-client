import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen" >
        <aside className="md:w-1/4 bg-blue-800 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">CRM Clientes</h2>
            <nav className="mt-10">
              <Link to="/"
                className={`${urlActual === '/clientes' ? 'text-blue-300' : 'text-white' } text-2xl block mt-2 hover:text-blue-300`}
              >
                Clientes
              </Link>

              <Link to="/clientes/nuevo"
                className={`${urlActual === '/clientes/nuevo' ? 'text-blue-300' : 'text-white' } text-2xl block mt-2 hover:text-blue-300`}
              >
                Nuevo Cliente
              </Link>
            </nav>
        </aside>

        <div className="md:w-3/4 p-10 bg-gray-100 md:h-screen overflow-scroll">
          <Outlet/>
        </div>

    </div>
  )
}

export default Layout