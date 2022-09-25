import Formulario from "../components/Formulario"


const Nuevo = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-blue-800'>Nuevo Cliente</h1>
      <p className='mt-3 font-bold text-gray-600'> Llena los siguentes campos para registrar un cliente</p>

      <Formulario/>
    </>
  )
}

export default Nuevo