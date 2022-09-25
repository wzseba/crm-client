import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='text-red-600 my-2'>
        {children}
    </div>
  )
}

export default Alerta