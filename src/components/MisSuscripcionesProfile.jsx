import React, { useContext } from 'react'
import './styles/MisclanesProfile.css'
import { usersContext } from '../context/users/usersContext'
import { SuscripcionesUser } from './SuscripcionesUser'

export const MisSuscripcionesProfile = () => {
  const {user} = useContext (usersContext)
  return (
    <>
    <div className='ClanesProfile'>
      <ul className='ContainerClanes'>
        <li>
        <h3>Hola {user.username}</h3>
        </li>
       
       {
        user.miembrode.map((clan)=>(
          <SuscripcionesUser key={clan._id} id={clan._id}/>
        ))
       }
      </ul>
    </div>
    </>
  
  )
}
