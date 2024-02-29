import React, { useContext } from 'react'
import './styles/MisclanesProfile.css'
import { usersContext } from '../context/users/usersContext'

export const MisSuscripcionesProfile = () => {
  const {user} = useContext (usersContext)
  return (
    <>
    <div className='ClanesProfile'>
      <ul className='ContainerClanes'>
        <li>
        <h3>Hola! {user.username}</h3>
        </li>
       
       {
        user.miembrode.map((clan)=>(
          <p key={clan._id}>{clan._id}</p> 
        ))
       }
      </ul>
    </div>
    </>
  
  )
}
