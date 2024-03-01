import React, { useContext } from 'react'
import { usersContext } from '../context/users/usersContext'
import './styles/MisclanesProfile.css'
import { ClanesAdministrados } from './ClanesAdministrados'


export const MisClanesProfile = () => {
const {user} = useContext (usersContext)

  return (
    <>
    <div className='profileDatos' id='misClanesBox'>
      <ul className='containerProfile' id='misClanesList'>
        <li>
        <h3>Hola {user.username}</h3>
        </li>
       
       {
        user.administradorde.map((clan)=>(
          <ClanesAdministrados key={clan._id} id={clan._id}/>
        ))
       }
      </ul>
    </div>
    </>
  )
}
