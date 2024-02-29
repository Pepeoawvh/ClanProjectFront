import React, { useContext } from 'react'
import { usersContext } from '../context/users/usersContext'
import './styles/ProfileDatos.css'

export const ProfileDatos = () => {
const {user} = useContext (usersContext)
console.log (user)
  return (

    <>
    <div className='ProfileDatos'>
    <h3>Hola! {user.username}</h3>
    <ul className='containerProfile'>
    <li>Nombre: {user.nombreCompleto}</li>
    <li>Correo: {user.correo}</li>
    <li>Dirección: {user.direccion}</li>
    <li>Fecha de nacimiento: {user.fechaNacimiento}</li>
    <li>Número de Strikes: {user.strikes}</li>
    </ul>
    </div>

    </>
  )
}

    
