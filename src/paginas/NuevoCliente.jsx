import { useNavigate, Form, useActionData } from "react-router-dom"
// import Formulario from "../components/Formulario"
import FormularioNuevo from "../components/FormularioNuevo"
import Error from "../components/Error";


//action of react router dom
export async function action({request}){
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  //validacion
  const errores = [];
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios');
  }

  //retornar si hay errores
  if(Object.keys(errores).length){
    return errores;
  }
}

const Nuevo = () => {

  const navigate = useNavigate();
  const errores = useActionData();

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
        >
          <FormularioNuevo/>

           <input
          className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
          type="submit"
          value="Registrar Cliente" />
        </Form>
       
      </div>

      
    </>
  )
}

export default Nuevo