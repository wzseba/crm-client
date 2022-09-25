import { Formik, Form, Field } from "formik"
import * as Yup from 'yup'
import Alerta from './Alerta'

const Formulario = () => {
    //validacion con yup
    const nuevoClienteValido = Yup.object().shape({
        nombre: Yup.string()
                    .min(3,'El Nombre es muy corto')
                    .max(15,'El Nombre es muy largo')
                    .required('El Nombre del Cliente es Obligatorio')
    })

    const handleSubmit = (valores) => {
        console.log(valores);
    }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>
        <Formik
            initialValues={{
                nombre:'',
                empresa:'',
                email:'',
                telefono:'',
                notas:''
            }}
            onSubmit={(values) =>{
                handleSubmit(values)
            }}
            validationSchema={nuevoClienteValido}
        >
            {({errors, touched}) => { 
                return (
                 <Form className="mt-10">
                <div className="mb-4">
                    <label
                    className="text-gray-800"
                    htmlFor="nombre"
                    >Nombre:</label>
                    <Field
                        id="nombre"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Nombre del Cliente"
                        name="nombre"
                    />
                    {errors.nombre && touched.nombre ? (
                        <Alerta>{errors.nombre}</Alerta>
                    ): null}
                </div>

                <div className="mb-4">
                    <label
                    className="text-gray-800"
                    htmlFor="empresa"
                    >Empresa:</label>
                    <Field
                        id="empresa"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Empresa del Cliente"
                        name="empresa"
                    />
                </div>

                <div className="mb-4">
                    <label
                    className="text-gray-800"
                    htmlFor="email"
                    >E-mail:</label>
                    <Field
                        id="email"
                        type="email"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="E-mail del Cliente"
                        name="email"
                    />
                </div>

                <div className="mb-4">
                    <label
                    className="text-gray-800"
                    htmlFor="telefono"
                    >Telefono:</label>
                    <Field
                        id="telefono"
                        type="tel"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Telefono del Cliente"
                        name="telefono"
                    />
                </div>

                <div className="mb-4">
                    <label
                    className="text-gray-800"
                    htmlFor="notas"
                    >Notas:</label>
                    <Field
                        as="textarea"
                        id="notas"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50 h-40 resize-none"
                        placeholder="Notas del Cliente"
                        name="notas"
                    />
                </div>

                <input type="submit" value="Agregar Cliente" className="Cliente mt-5 w-full bg-blue-800 text-white uppercase font-bold text-lg p-3 cursor-pointer" />
                
            </Form>
            )}}
           
        </Formik>
    </div>
  )
}

export default Formulario