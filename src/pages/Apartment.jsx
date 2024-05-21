import React from 'react'
import { useParams } from 'react-router-dom'

function Apartment() {
    const { id } = useParams();

  return (
    <div className='pt-[56px] md:pt-[80px]'>Hola Mundo! {id}</div>
  )
}

export default Apartment