import React, { useContext, useState } from 'react';
import { usersContext } from '../context/users/usersContext';
import './styles/ProfileDatos.css';

export const ProfileDatos = () => {
  const { user, updateUser } = useContext(usersContext);
  const [editing, setEditing] = useState(false);
  const [newUser, setNewUser] = useState(user);

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateUser(newUser);
    setEditing(false);
  };

  return (
    <>
      <div className='profileDatos'>
        <h3>¡Hola {user.username}!</h3>
        {!editing ? (
          <ul className='containerProfile'>
            <li>Nombre: {user.nombreCompleto}</li>
            <li>Correo: {user.correo}</li>
            <li>Rol: {user.rol}</li>
            <li>Estado de cuenta: {user.estadoCuenta}</li>
            <li>Último acceso: {user.ultimoAcceso}</li>
            <button className="buttonEditarProfile" onClick={() => setEditing(true)}>Editar</button>
          </ul>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <ul className='containerProfileForm'>
              <li>
                Nombre:
                <input
                  type='text'
                  name='nombreCompleto'
                  value={newUser.nombreCompleto}
                  onChange={handleInputChange}
                />
              </li>
              <li>
                Correo:
                <input
                  type='email'
                  name='correo'
                  value={newUser.correo}
                  onChange={handleInputChange}
                />
              </li>
              {/* Agrega más campos de entrada para editar aquí si es necesario */}
              <li className='editProfileButtons'>
                <button type='submit'>Guardar</button>
                <button onClick={() => setEditing(false)}>Cancelar</button>
              </li>
            </ul>
          </form>
        )}
      </div>
    </>
  );
};
