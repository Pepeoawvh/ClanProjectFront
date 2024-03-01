import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'; 
import { usersContext } from '../context/users/usersContext';
import './styles/MisclanesProfile.css';
import { ClanesAdministrados } from './ClanesAdministrados';

export const MisClanesProfile = () => {
  const { user } = useContext(usersContext);

  return (
    <>
      <div className='profileDatos' id='misClanesBox'>
        <ul className='containerProfile' id='misClanesList'>
          <li>
            <h3>Hola {user.username}</h3>
          </li>
          {user.administradorde.map((clan) => (
            <ClanesAdministrados key={clan._id} id={clan._id} />
          ))}
         
        </ul>
        <div className="iniActions2">
    
            <NavLink to="/CrearClan">
              <button>Crear un Clan⭐</button>
            </NavLink>
          </div>
      </div>
    
    </>
  );
};

