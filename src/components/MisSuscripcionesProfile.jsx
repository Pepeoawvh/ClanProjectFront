import React, { useContext } from 'react'
import './styles/MisclanesProfile.css'
import { NavLink } from 'react-router-dom'; 
import { usersContext } from '../context/users/usersContext'
import { SuscripcionesUser } from './SuscripcionesUser'

export const MisSuscripcionesProfile = () => {
  const {user} = useContext (usersContext)
  return (
    <>
    <div className='profileDatos' id='suscripcionesBox'>
      <ul className='containerProfile' id='suscripcionesList'>
        <li>
        <h3>¡Hola {user.username}!</h3>
        </li>
       
       {
        user.miembrode.map((clan)=>(
          <SuscripcionesUser key={clan._id} id={clan._id}/>
        ))
       }
      </ul>
      <div className="iniActions2">
    
    <NavLink to="/UnirseClan">
      <button>Unirse a un Clan🪅</button>
    </NavLink>
  </div>
    </div>
    </>
  
  )
}
