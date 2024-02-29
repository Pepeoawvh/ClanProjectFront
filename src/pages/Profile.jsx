import React, { useState } from 'react'
import './styles/Profile.css'
import { ProfileDatos } from '../components/ProfileDatos'
import { MisClanesProfile } from '../components/MisClanesProfile'
import { MisSuscripcionesProfile } from '../components/MisSuscripcionesProfile'


export const Profile = () => {
  const [profileSelected,setProfileSelected] = useState ('datos')
  
  return (
    <>
     <div className='botonProfile'>
      <button onClick={()=>{setProfileSelected ('datos')}}>Mis Datos</button>
      <button onClick={()=>{setProfileSelected ('clanes')}}>Mis Clanes </button>
      <button onClick={()=>{setProfileSelected('suscripciones')}}>Mis Suscripciones</button>
     </div>
      {
        (profileSelected==='datos')? <ProfileDatos/>:
        (profileSelected==='clanes')?<MisClanesProfile/>:
          <MisSuscripcionesProfile/>
      }
    
    
    

    </>
  )
}
