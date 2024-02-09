import React, { useState } from "react";
import "../styles/FormularioRegistro.css";

export const FormularioRegistro = () => {
  // Estado para guardar los datos del formulario
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });
  // Creamos una función para manejar el cambio de los inputs
  const handleChange = (event) => {
    // Actualizamos el estado con el valor del input
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  // Creamos una función, proceso asincrono, para manejar el envío del formulario
  const handleSubmit = async (event) => {
    // Evitamos el comportamiento por defecto del formulario
    event.preventDefault();
    // Intentar conectarse a la colección de bbdd, y agrega nuevo doc

    //  bloque try catch
    // try {
    // await CONEXION
    // alert("USUARIO GUARDADA")
    // } catch (error){
    // alert("No se pudo guardar la reserva")
    // }
  };

  return (
  <>

  <div>Formulario Registro</div>
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
          placeholder="Ej: Juan Clanel"
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={datos.telefono}
          onChange={handleChange}
          placeholder="Ej: 9 4321 5678"
        />
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={datos.correo}
          onChange={handleChange}
          placeholder="Ej: email@clanero.cl"
        />

        <button type="submit">Reservar</button>
      </form>


    </div>
    </>
  );
};
