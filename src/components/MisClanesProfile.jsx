import React, { useContext } from 'react'
import { usersContext } from '../context/users/usersContext'
import './styles/MisclanesProfile.css'


export const MisClanesProfile = () => {
const {user} = useContext (usersContext)
  return (
    <>
    <div className='ClanesProfile'>
      <ul className='ContainerClanes'>
        <li>
        <h3>Hola! {user.username}</h3>
        </li>
       
       {
        user.administradorde.map((clan)=>(
          <p key={clan._id}>{clan._id}</p> 
        ))
       }
      </ul>
    </div>
    </>
  )
}
