import { useActionData, useLoaderData, Form, useNavigate, redirect } from "react-router-dom";
import { obtenerCliente, actualizarCliente } from "../data/Clientes"
import FormularioNuevo from '../components/FormularioNuevo';
import Error from "../components/Error";

export async function loader({params}){
  const cliente = await obtenerCliente(params.clienteId);
  if(Object.values(cliente).length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'No Hay Resultados'
    })
  }
  return cliente;
}

//action of react router dom
export async function action({request,params}){

  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get('email');

  //validacion
  const errores = [];
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios');
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)){
    errores.push('Email no valido')
  }
  //retornar si hay errores
  if(Object.keys(errores).length){
    return errores;
  }

  await actualizarCliente(params.clienteId,datos);

  return redirect('/')
}

const EditarCliente = () => {

  const errores = useActionData();
  const cliente = useLoaderData();
  const navigate = useNavigate();


  return (
    <>
      <h1 className='font-black text-4xl text-blue-800'>Nuevo Cliente</h1>
      <p className='mt-3 font-bold text-gray-600'> Llena los siguentes campos para registrar un cliente</p>

      <div className="flex justify-end">
        <button 
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={()=> navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {errores?.length && errores.map((error,i)=> <Error key={i}>{error}</Error>) }
        <Form
          method="post"
          noValidate
        >
          <FormularioNuevo
            cliente={cliente}
          />

           <input
          className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
          type="submit"
          value="Guardar Cambios" />
        </Form>
       
      </div>

      
    </>
  )
}

export default EditarCliente